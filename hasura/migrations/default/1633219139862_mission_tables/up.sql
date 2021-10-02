SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.equipment (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    manufacturer text,
    serial_number text,
    weight numeric,
    image_url text,
    tag_id integer
);
CREATE SEQUENCE public.equipment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.equipment_id_seq OWNED BY public.equipment.id;
CREATE TABLE public.experiment (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    description text,
    tag_id integer NOT NULL,
    type text
);
CREATE TABLE public.experiment_type (
    id text NOT NULL,
    description text
);
CREATE SEQUENCE public.experiments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.experiments_id_seq OWNED BY public.experiment.id;
CREATE TABLE public.file (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    filename text NOT NULL,
    mimetype text NOT NULL,
    uploaded_by integer NOT NULL,
    filesize integer NOT NULL
);
CREATE TABLE public."group" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    description text NOT NULL
);
CREATE SEQUENCE public.group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.group_id_seq OWNED BY public."group".id;
CREATE TABLE public.group_xref_users (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    group_id integer NOT NULL,
    user_id integer NOT NULL
);
CREATE SEQUENCE public.group_xref_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.group_xref_users_id_seq OWNED BY public.group_xref_users.id;
CREATE TABLE public.meta_field (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    meta_key_id integer NOT NULL,
    post_id integer NOT NULL,
    value text NOT NULL
);
CREATE SEQUENCE public.meta_field_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.meta_field_id_seq OWNED BY public.meta_field.id;
CREATE TABLE public.meta_key (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    mission_id integer NOT NULL
);
CREATE SEQUENCE public.meta_key_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.meta_key_id_seq OWNED BY public.meta_key.id;
CREATE TABLE public.mission (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    title text NOT NULL,
    image_id uuid
);
CREATE TABLE public.mission_element (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    description text
);
CREATE TABLE public.mission_element_components_functions (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    mission_element_id integer NOT NULL
);
CREATE SEQUENCE public.mission_elements_components_functions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mission_elements_components_functions_id_seq OWNED BY public.mission_element_components_functions.id;
CREATE SEQUENCE public.mission_elements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mission_elements_id_seq OWNED BY public.mission_element.id;
CREATE SEQUENCE public.mission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.mission_id_seq OWNED BY public.mission.id;
CREATE TABLE public.post (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    text text,
    related_post_id integer,
    file_id uuid,
    user_id integer NOT NULL,
    is_locked boolean DEFAULT false NOT NULL
);
CREATE SEQUENCE public.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.post_id_seq OWNED BY public.post.id;
CREATE TABLE public.post_tags (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    post_id integer NOT NULL,
    tag_id integer NOT NULL
);
CREATE SEQUENCE public.post_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.post_tags_id_seq OWNED BY public.post_tags.id;
CREATE TABLE public.sensitive_post (
    id integer NOT NULL,
    post_id integer NOT NULL,
    group_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE SEQUENCE public.sensitive_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.sensitive_post_id_seq OWNED BY public.sensitive_post.id;
CREATE TABLE public.tag (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL,
    tag_category_id integer NOT NULL,
    description text,
    acronym text
);
CREATE TABLE public.tag_category (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    title text NOT NULL
);
CREATE SEQUENCE public.tag_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tag_category_id_seq OWNED BY public.tag_category.id;
CREATE SEQUENCE public.tag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tag_id_seq OWNED BY public.tag.id;
ALTER TABLE ONLY public.equipment ALTER COLUMN id SET DEFAULT nextval('public.equipment_id_seq'::regclass);
ALTER TABLE ONLY public.experiment ALTER COLUMN id SET DEFAULT nextval('public.experiments_id_seq'::regclass);
ALTER TABLE ONLY public."group" ALTER COLUMN id SET DEFAULT nextval('public.group_id_seq'::regclass);
ALTER TABLE ONLY public.group_xref_users ALTER COLUMN id SET DEFAULT nextval('public.group_xref_users_id_seq'::regclass);
ALTER TABLE ONLY public.meta_field ALTER COLUMN id SET DEFAULT nextval('public.meta_field_id_seq'::regclass);
ALTER TABLE ONLY public.meta_key ALTER COLUMN id SET DEFAULT nextval('public.meta_key_id_seq'::regclass);
ALTER TABLE ONLY public.mission ALTER COLUMN id SET DEFAULT nextval('public.mission_id_seq'::regclass);
ALTER TABLE ONLY public.mission_element ALTER COLUMN id SET DEFAULT nextval('public.mission_elements_id_seq'::regclass);
ALTER TABLE ONLY public.mission_element_components_functions ALTER COLUMN id SET DEFAULT nextval('public.mission_elements_components_functions_id_seq'::regclass);
ALTER TABLE ONLY public.post ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);
ALTER TABLE ONLY public.post_tags ALTER COLUMN id SET DEFAULT nextval('public.post_tags_id_seq'::regclass);
ALTER TABLE ONLY public.sensitive_post ALTER COLUMN id SET DEFAULT nextval('public.sensitive_post_id_seq'::regclass);
ALTER TABLE ONLY public.tag ALTER COLUMN id SET DEFAULT nextval('public.tag_id_seq'::regclass);
ALTER TABLE ONLY public.tag_category ALTER COLUMN id SET DEFAULT nextval('public.tag_category_id_seq'::regclass);
ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT equipment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.experiment_type
    ADD CONSTRAINT experiment_type_description_key UNIQUE (description);
ALTER TABLE ONLY public.experiment_type
    ADD CONSTRAINT experiment_type_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.experiment
    ADD CONSTRAINT experiments_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.file
    ADD CONSTRAINT file_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."group"
    ADD CONSTRAINT group_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.group_xref_users
    ADD CONSTRAINT group_xref_users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.meta_field
    ADD CONSTRAINT meta_field_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.meta_key
    ADD CONSTRAINT meta_key_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mission_element_components_functions
    ADD CONSTRAINT mission_elements_components_functions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mission_element
    ADD CONSTRAINT mission_elements_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.mission
    ADD CONSTRAINT mission_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.sensitive_post
    ADD CONSTRAINT sensitive_post_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_category
    ADD CONSTRAINT tag_category_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_equipment_updated_at BEFORE UPDATE ON public.equipment FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_equipment_updated_at ON public.equipment IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_experiments_updated_at BEFORE UPDATE ON public.experiment FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_experiments_updated_at ON public.experiment IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_file_updated_at BEFORE UPDATE ON public.file FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_file_updated_at ON public.file IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_updated_at BEFORE UPDATE ON public."group" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_updated_at ON public."group" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_group_xref_users_updated_at BEFORE UPDATE ON public.group_xref_users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_group_xref_users_updated_at ON public.group_xref_users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_meta_field_updated_at BEFORE UPDATE ON public.meta_field FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_meta_field_updated_at ON public.meta_field IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_meta_key_updated_at BEFORE UPDATE ON public.meta_key FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_meta_key_updated_at ON public.meta_key IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mission_elements_components_functions_updated_at BEFORE UPDATE ON public.mission_element_components_functions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mission_elements_components_functions_updated_at ON public.mission_element_components_functions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mission_elements_updated_at BEFORE UPDATE ON public.mission_element FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mission_elements_updated_at ON public.mission_element IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_mission_updated_at BEFORE UPDATE ON public.mission FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_mission_updated_at ON public.mission IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_post_tags_updated_at BEFORE UPDATE ON public.post_tags FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_post_tags_updated_at ON public.post_tags IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_post_updated_at BEFORE UPDATE ON public.post FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_post_updated_at ON public.post IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_sensitive_post_updated_at BEFORE UPDATE ON public.sensitive_post FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_sensitive_post_updated_at ON public.sensitive_post IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_tag_category_updated_at BEFORE UPDATE ON public.tag_category FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_tag_category_updated_at ON public.tag_category IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_tag_updated_at BEFORE UPDATE ON public.tag FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_tag_updated_at ON public.tag IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT equipment_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tag(id);
ALTER TABLE ONLY public.experiment
    ADD CONSTRAINT experiment_type_fkey FOREIGN KEY (type) REFERENCES public.experiment_type(description);
ALTER TABLE ONLY public.experiment
    ADD CONSTRAINT experiments_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tag(id);
ALTER TABLE ONLY public.group_xref_users
    ADD CONSTRAINT group_xref_users_group_id_fkey FOREIGN KEY (group_id) REFERENCES public."group"(id);
ALTER TABLE ONLY public.group_xref_users
    ADD CONSTRAINT group_xref_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE ONLY public.meta_field
    ADD CONSTRAINT meta_field_meta_key_id_fkey FOREIGN KEY (meta_key_id) REFERENCES public.meta_key(id);
ALTER TABLE ONLY public.meta_field
    ADD CONSTRAINT meta_field_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id);
ALTER TABLE ONLY public.meta_key
    ADD CONSTRAINT meta_key_mission_id_fkey FOREIGN KEY (mission_id) REFERENCES public.mission(id);
ALTER TABLE ONLY public.mission_element_components_functions
    ADD CONSTRAINT mission_element_components_functions_mission_element_id_fkey FOREIGN KEY (mission_element_id) REFERENCES public.mission_element(id);
ALTER TABLE ONLY public.mission
    ADD CONSTRAINT mission_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.file(id);
ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_file_id_fkey FOREIGN KEY (file_id) REFERENCES public.file(id);
ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_related_post_id_fkey FOREIGN KEY (related_post_id) REFERENCES public.post(id);
ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id);
ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tag(id);
ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id);
ALTER TABLE ONLY public.sensitive_post
    ADD CONSTRAINT sensitive_post_group_id_fkey FOREIGN KEY (group_id) REFERENCES public."group"(id);
ALTER TABLE ONLY public.sensitive_post
    ADD CONSTRAINT sensitive_post_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id);
ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tag_tag_category_id_fkey FOREIGN KEY (tag_category_id) REFERENCES public.tag_category(id);
