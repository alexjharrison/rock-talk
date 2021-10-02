DC=docker-compose
HCLI=$(DC) exec hasura hasura-cli


migration: 
	@$(HCLI) migrate create mission_tables --from-server --database-name default
	sudo chown -R `id -u`:`id -g` ./hasura

seed:
	@$(HCLI) seed create tables_seed \
		--database-name default \
		--from-table auth.users \
		--from-table equipment \
		--from-table experiment \
		--from-table experiment_type \
		--from-table file \
		--from-table group \
		--from-table group_xref_users \
		--from-table meta_field \
		--from-table meta_key \
		--from-table mission \
		--from-table mission_element \
		--from-table mission_element_components_functions \
		--from-table post \
		--from-table post_tags \
		--from-table sensitive_post \
		--from-table tag \
		--from-table tag_category 

export:
	@$(HCLI) metadata export
	@$(DC) exec vue npm run generate
	mv vue/api.ts express/src/api.ts
	# sudo chown -R `id -u`:`id -g` ./hasura

db-reset:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	docker volume rm hackathon-starter_db_data
	@$(DC) up -d

rebuild:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) build --no-cache
	@$(DC) up -d

reboot:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) build 
	@$(DC) up -d 

rebuild-prod:
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) down
	docker volume create --name=caddy_data
	# docker volume create --name=file_uploads
	@$(DC) -f docker-compose.prod.yml build --no-cache
	@$(DC) -f docker-compose.prod.yml up -d

reboot-prod:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	# @$(DC) -f docker-compose.prod.yml build 
	@$(DC) -f docker-compose.prod.yml up -d

