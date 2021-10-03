import { gql } from '@urql/vue';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String'];
};

export type RegisterArgs = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResult = {
  __typename?: 'RegisterResult';
  token: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth.users" */
export type Auth_Users = {
  __typename?: 'auth_users';
  email: Scalars['String'];
  encrypted_password: Scalars['String'];
  first_name: Scalars['String'];
  /** An array relationship */
  groups: Array<Group_Xref_Users>;
  /** An aggregate relationship */
  groups_aggregate: Group_Xref_Users_Aggregate;
  id: Scalars['Int'];
  last_name: Scalars['String'];
};


/** columns and relationships of "auth.users" */
export type Auth_UsersGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type Auth_UsersGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: Maybe<Array<Auth_Users_Bool_Exp>>;
  _not?: Maybe<Auth_Users_Bool_Exp>;
  _or?: Maybe<Array<Auth_Users_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  encrypted_password?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  groups?: Maybe<Group_Xref_Users_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersEncryptedPasswordKey = 'users_encrypted_password_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  groups?: Maybe<Group_Xref_Users_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};

/** on conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  email?: Maybe<Order_By>;
  encrypted_password?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  groups_aggregate?: Maybe<Group_Xref_Users_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "equipment" */
export type Equipment = {
  __typename?: 'equipment';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  /** An object relationship */
  tag?: Maybe<Tag>;
  tag_id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "equipment" */
export type Equipment_Aggregate = {
  __typename?: 'equipment_aggregate';
  aggregate?: Maybe<Equipment_Aggregate_Fields>;
  nodes: Array<Equipment>;
};

/** aggregate fields of "equipment" */
export type Equipment_Aggregate_Fields = {
  __typename?: 'equipment_aggregate_fields';
  avg?: Maybe<Equipment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Equipment_Max_Fields>;
  min?: Maybe<Equipment_Min_Fields>;
  stddev?: Maybe<Equipment_Stddev_Fields>;
  stddev_pop?: Maybe<Equipment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Equipment_Stddev_Samp_Fields>;
  sum?: Maybe<Equipment_Sum_Fields>;
  var_pop?: Maybe<Equipment_Var_Pop_Fields>;
  var_samp?: Maybe<Equipment_Var_Samp_Fields>;
  variance?: Maybe<Equipment_Variance_Fields>;
};


/** aggregate fields of "equipment" */
export type Equipment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Equipment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "equipment" */
export type Equipment_Aggregate_Order_By = {
  avg?: Maybe<Equipment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Equipment_Max_Order_By>;
  min?: Maybe<Equipment_Min_Order_By>;
  stddev?: Maybe<Equipment_Stddev_Order_By>;
  stddev_pop?: Maybe<Equipment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Equipment_Stddev_Samp_Order_By>;
  sum?: Maybe<Equipment_Sum_Order_By>;
  var_pop?: Maybe<Equipment_Var_Pop_Order_By>;
  var_samp?: Maybe<Equipment_Var_Samp_Order_By>;
  variance?: Maybe<Equipment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "equipment" */
export type Equipment_Arr_Rel_Insert_Input = {
  data: Array<Equipment_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Equipment_On_Conflict>;
};

/** aggregate avg on columns */
export type Equipment_Avg_Fields = {
  __typename?: 'equipment_avg_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "equipment" */
export type Equipment_Avg_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "equipment". All fields are combined with a logical 'AND'. */
export type Equipment_Bool_Exp = {
  _and?: Maybe<Array<Equipment_Bool_Exp>>;
  _not?: Maybe<Equipment_Bool_Exp>;
  _or?: Maybe<Array<Equipment_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  manufacturer?: Maybe<String_Comparison_Exp>;
  serial_number?: Maybe<String_Comparison_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  weight?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "equipment" */
export enum Equipment_Constraint {
  /** unique or primary key constraint */
  EquipmentPkey = 'equipment_pkey'
}

/** input type for incrementing numeric columns in table "equipment" */
export type Equipment_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "equipment" */
export type Equipment_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Equipment_Max_Fields = {
  __typename?: 'equipment_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "equipment" */
export type Equipment_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  serial_number?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Equipment_Min_Fields = {
  __typename?: 'equipment_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "equipment" */
export type Equipment_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  serial_number?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** response of any mutation on the table "equipment" */
export type Equipment_Mutation_Response = {
  __typename?: 'equipment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Equipment>;
};

/** on conflict condition type for table "equipment" */
export type Equipment_On_Conflict = {
  constraint: Equipment_Constraint;
  update_columns?: Array<Equipment_Update_Column>;
  where?: Maybe<Equipment_Bool_Exp>;
};

/** Ordering options when selecting data from "equipment". */
export type Equipment_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  serial_number?: Maybe<Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tag_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** primary key columns input for table: equipment */
export type Equipment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "equipment" */
export enum Equipment_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "equipment" */
export type Equipment_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['String']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Equipment_Stddev_Fields = {
  __typename?: 'equipment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "equipment" */
export type Equipment_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Equipment_Stddev_Pop_Fields = {
  __typename?: 'equipment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "equipment" */
export type Equipment_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Equipment_Stddev_Samp_Fields = {
  __typename?: 'equipment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "equipment" */
export type Equipment_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Equipment_Sum_Fields = {
  __typename?: 'equipment_sum_fields';
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "equipment" */
export type Equipment_Sum_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** update columns of table "equipment" */
export enum Equipment_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Equipment_Var_Pop_Fields = {
  __typename?: 'equipment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "equipment" */
export type Equipment_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Equipment_Var_Samp_Fields = {
  __typename?: 'equipment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "equipment" */
export type Equipment_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Equipment_Variance_Fields = {
  __typename?: 'equipment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "equipment" */
export type Equipment_Variance_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** columns and relationships of "experiment" */
export type Experiment = {
  __typename?: 'experiment';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  experiment_type?: Maybe<Experiment_Type>;
  id: Scalars['Int'];
  /** An object relationship */
  tag?: Maybe<Tag>;
  tag_id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "experiment" */
export type Experiment_Aggregate = {
  __typename?: 'experiment_aggregate';
  aggregate?: Maybe<Experiment_Aggregate_Fields>;
  nodes: Array<Experiment>;
};

/** aggregate fields of "experiment" */
export type Experiment_Aggregate_Fields = {
  __typename?: 'experiment_aggregate_fields';
  avg?: Maybe<Experiment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiment_Max_Fields>;
  min?: Maybe<Experiment_Min_Fields>;
  stddev?: Maybe<Experiment_Stddev_Fields>;
  stddev_pop?: Maybe<Experiment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiment_Stddev_Samp_Fields>;
  sum?: Maybe<Experiment_Sum_Fields>;
  var_pop?: Maybe<Experiment_Var_Pop_Fields>;
  var_samp?: Maybe<Experiment_Var_Samp_Fields>;
  variance?: Maybe<Experiment_Variance_Fields>;
};


/** aggregate fields of "experiment" */
export type Experiment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiment" */
export type Experiment_Aggregate_Order_By = {
  avg?: Maybe<Experiment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiment_Max_Order_By>;
  min?: Maybe<Experiment_Min_Order_By>;
  stddev?: Maybe<Experiment_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiment_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiment_Sum_Order_By>;
  var_pop?: Maybe<Experiment_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiment_Var_Samp_Order_By>;
  variance?: Maybe<Experiment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "experiment" */
export type Experiment_Arr_Rel_Insert_Input = {
  data: Array<Experiment_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiment_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiment_Avg_Fields = {
  __typename?: 'experiment_avg_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiment" */
export type Experiment_Avg_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiment". All fields are combined with a logical 'AND'. */
export type Experiment_Bool_Exp = {
  _and?: Maybe<Array<Experiment_Bool_Exp>>;
  _not?: Maybe<Experiment_Bool_Exp>;
  _or?: Maybe<Array<Experiment_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  experiment_type?: Maybe<Experiment_Type_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiment" */
export enum Experiment_Constraint {
  /** unique or primary key constraint */
  ExperimentsPkey = 'experiments_pkey'
}

/** input type for incrementing numeric columns in table "experiment" */
export type Experiment_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiment" */
export type Experiment_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  experiment_type?: Maybe<Experiment_Type_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Experiment_Max_Fields = {
  __typename?: 'experiment_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "experiment" */
export type Experiment_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiment_Min_Fields = {
  __typename?: 'experiment_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "experiment" */
export type Experiment_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiment" */
export type Experiment_Mutation_Response = {
  __typename?: 'experiment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiment>;
};

/** on conflict condition type for table "experiment" */
export type Experiment_On_Conflict = {
  constraint: Experiment_Constraint;
  update_columns?: Array<Experiment_Update_Column>;
  where?: Maybe<Experiment_Bool_Exp>;
};

/** Ordering options when selecting data from "experiment". */
export type Experiment_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  experiment_type?: Maybe<Experiment_Type_Order_By>;
  id?: Maybe<Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tag_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: experiment */
export type Experiment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "experiment" */
export enum Experiment_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "experiment" */
export type Experiment_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Experiment_Stddev_Fields = {
  __typename?: 'experiment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiment" */
export type Experiment_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiment_Stddev_Pop_Fields = {
  __typename?: 'experiment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiment" */
export type Experiment_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiment_Stddev_Samp_Fields = {
  __typename?: 'experiment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiment" */
export type Experiment_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiment_Sum_Fields = {
  __typename?: 'experiment_sum_fields';
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiment" */
export type Experiment_Sum_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** columns and relationships of "experiment_type" */
export type Experiment_Type = {
  __typename?: 'experiment_type';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  experiments: Array<Experiment>;
  /** An aggregate relationship */
  experiments_aggregate: Experiment_Aggregate;
  id: Scalars['String'];
};


/** columns and relationships of "experiment_type" */
export type Experiment_TypeExperimentsArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};


/** columns and relationships of "experiment_type" */
export type Experiment_TypeExperiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};

/** aggregated selection of "experiment_type" */
export type Experiment_Type_Aggregate = {
  __typename?: 'experiment_type_aggregate';
  aggregate?: Maybe<Experiment_Type_Aggregate_Fields>;
  nodes: Array<Experiment_Type>;
};

/** aggregate fields of "experiment_type" */
export type Experiment_Type_Aggregate_Fields = {
  __typename?: 'experiment_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Experiment_Type_Max_Fields>;
  min?: Maybe<Experiment_Type_Min_Fields>;
};


/** aggregate fields of "experiment_type" */
export type Experiment_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiment_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "experiment_type". All fields are combined with a logical 'AND'. */
export type Experiment_Type_Bool_Exp = {
  _and?: Maybe<Array<Experiment_Type_Bool_Exp>>;
  _not?: Maybe<Experiment_Type_Bool_Exp>;
  _or?: Maybe<Array<Experiment_Type_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  experiments?: Maybe<Experiment_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiment_type" */
export enum Experiment_Type_Constraint {
  /** unique or primary key constraint */
  ExperimentTypeDescriptionKey = 'experiment_type_description_key',
  /** unique or primary key constraint */
  ExperimentTypePkey = 'experiment_type_pkey'
}

/** input type for inserting data into table "experiment_type" */
export type Experiment_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  experiments?: Maybe<Experiment_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Experiment_Type_Max_Fields = {
  __typename?: 'experiment_type_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Experiment_Type_Min_Fields = {
  __typename?: 'experiment_type_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "experiment_type" */
export type Experiment_Type_Mutation_Response = {
  __typename?: 'experiment_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiment_Type>;
};

/** input type for inserting object relation for remote table "experiment_type" */
export type Experiment_Type_Obj_Rel_Insert_Input = {
  data: Experiment_Type_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Experiment_Type_On_Conflict>;
};

/** on conflict condition type for table "experiment_type" */
export type Experiment_Type_On_Conflict = {
  constraint: Experiment_Type_Constraint;
  update_columns?: Array<Experiment_Type_Update_Column>;
  where?: Maybe<Experiment_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "experiment_type". */
export type Experiment_Type_Order_By = {
  description?: Maybe<Order_By>;
  experiments_aggregate?: Maybe<Experiment_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: experiment_type */
export type Experiment_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "experiment_type" */
export enum Experiment_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "experiment_type" */
export type Experiment_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "experiment_type" */
export enum Experiment_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** update columns of table "experiment" */
export enum Experiment_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Experiment_Var_Pop_Fields = {
  __typename?: 'experiment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiment" */
export type Experiment_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiment_Var_Samp_Fields = {
  __typename?: 'experiment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiment" */
export type Experiment_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiment_Variance_Fields = {
  __typename?: 'experiment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiment" */
export type Experiment_Variance_Order_By = {
  id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** columns and relationships of "file" */
export type File = {
  __typename?: 'file';
  created_at: Scalars['timestamptz'];
  filename: Scalars['String'];
  filesize: Scalars['Int'];
  id: Scalars['uuid'];
  mimetype: Scalars['String'];
  /** An array relationship */
  missions: Array<Mission>;
  /** An aggregate relationship */
  missions_aggregate: Mission_Aggregate;
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
  updated_at: Scalars['timestamptz'];
  uploaded_by: Scalars['Int'];
  /** An object relationship */
  user?: Maybe<Auth_Users>;
};


/** columns and relationships of "file" */
export type FileMissionsArgs = {
  distinct_on?: Maybe<Array<Mission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Order_By>>;
  where?: Maybe<Mission_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FileMissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Order_By>>;
  where?: Maybe<Mission_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FilePostsArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


/** columns and relationships of "file" */
export type FilePosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** aggregated selection of "file" */
export type File_Aggregate = {
  __typename?: 'file_aggregate';
  aggregate?: Maybe<File_Aggregate_Fields>;
  nodes: Array<File>;
};

/** aggregate fields of "file" */
export type File_Aggregate_Fields = {
  __typename?: 'file_aggregate_fields';
  avg?: Maybe<File_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<File_Max_Fields>;
  min?: Maybe<File_Min_Fields>;
  stddev?: Maybe<File_Stddev_Fields>;
  stddev_pop?: Maybe<File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Stddev_Samp_Fields>;
  sum?: Maybe<File_Sum_Fields>;
  var_pop?: Maybe<File_Var_Pop_Fields>;
  var_samp?: Maybe<File_Var_Samp_Fields>;
  variance?: Maybe<File_Variance_Fields>;
};


/** aggregate fields of "file" */
export type File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type File_Avg_Fields = {
  __typename?: 'file_avg_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type File_Bool_Exp = {
  _and?: Maybe<Array<File_Bool_Exp>>;
  _not?: Maybe<File_Bool_Exp>;
  _or?: Maybe<Array<File_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  filename?: Maybe<String_Comparison_Exp>;
  filesize?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mimetype?: Maybe<String_Comparison_Exp>;
  missions?: Maybe<Mission_Bool_Exp>;
  posts?: Maybe<Post_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uploaded_by?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Auth_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "file" */
export enum File_Constraint {
  /** unique or primary key constraint */
  FilePkey = 'file_pkey'
}

/** input type for incrementing numeric columns in table "file" */
export type File_Inc_Input = {
  filesize?: Maybe<Scalars['Int']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "file" */
export type File_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  missions?: Maybe<Mission_Arr_Rel_Insert_Input>;
  posts?: Maybe<Post_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
  user?: Maybe<Auth_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type File_Max_Fields = {
  __typename?: 'file_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type File_Min_Fields = {
  __typename?: 'file_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "file" */
export type File_Mutation_Response = {
  __typename?: 'file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File>;
};

/** input type for inserting object relation for remote table "file" */
export type File_Obj_Rel_Insert_Input = {
  data: File_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<File_On_Conflict>;
};

/** on conflict condition type for table "file" */
export type File_On_Conflict = {
  constraint: File_Constraint;
  update_columns?: Array<File_Update_Column>;
  where?: Maybe<File_Bool_Exp>;
};

/** Ordering options when selecting data from "file". */
export type File_Order_By = {
  created_at?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  filesize?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  missions_aggregate?: Maybe<Mission_Aggregate_Order_By>;
  posts_aggregate?: Maybe<Post_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  uploaded_by?: Maybe<Order_By>;
  user?: Maybe<Auth_Users_Order_By>;
};

/** primary key columns input for table: file */
export type File_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file" */
export enum File_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Filename = 'filename',
  /** column name */
  Filesize = 'filesize',
  /** column name */
  Id = 'id',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UploadedBy = 'uploaded_by'
}

/** input type for updating data in table "file" */
export type File_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type File_Stddev_Fields = {
  __typename?: 'file_stddev_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type File_Stddev_Pop_Fields = {
  __typename?: 'file_stddev_pop_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type File_Stddev_Samp_Fields = {
  __typename?: 'file_stddev_samp_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type File_Sum_Fields = {
  __typename?: 'file_sum_fields';
  filesize?: Maybe<Scalars['Int']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "file" */
export enum File_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Filename = 'filename',
  /** column name */
  Filesize = 'filesize',
  /** column name */
  Id = 'id',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UploadedBy = 'uploaded_by'
}

/** aggregate var_pop on columns */
export type File_Var_Pop_Fields = {
  __typename?: 'file_var_pop_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type File_Var_Samp_Fields = {
  __typename?: 'file_var_samp_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type File_Variance_Fields = {
  __typename?: 'file_variance_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: 'group';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An array relationship */
  group_xref_users: Array<Group_Xref_Users>;
  /** An aggregate relationship */
  group_xref_users_aggregate: Group_Xref_Users_Aggregate;
  id: Scalars['Int'];
  /** An array relationship */
  sensitive_posts: Array<Sensitive_Post>;
  /** An aggregate relationship */
  sensitive_posts_aggregate: Sensitive_Post_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "group" */
export type GroupGroup_Xref_UsersArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupGroup_Xref_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupSensitive_PostsArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupSensitive_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  avg?: Maybe<Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
  stddev?: Maybe<Group_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Sum_Fields>;
  var_pop?: Maybe<Group_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Var_Samp_Fields>;
  variance?: Maybe<Group_Variance_Fields>;
};


/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Group_Avg_Fields = {
  __typename?: 'group_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: Maybe<Array<Group_Bool_Exp>>;
  _not?: Maybe<Group_Bool_Exp>;
  _or?: Maybe<Array<Group_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  group_xref_users?: Maybe<Group_Xref_Users_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sensitive_posts?: Maybe<Sensitive_Post_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint */
  GroupPkey = 'group_pkey'
}

/** input type for incrementing numeric columns in table "group" */
export type Group_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  group_xref_users?: Maybe<Group_Xref_Users_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  sensitive_posts?: Maybe<Sensitive_Post_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  __typename?: 'group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** input type for inserting object relation for remote table "group" */
export type Group_Obj_Rel_Insert_Input = {
  data: Group_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** on conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns?: Array<Group_Update_Column>;
  where?: Maybe<Group_Bool_Exp>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  group_xref_users_aggregate?: Maybe<Group_Xref_Users_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  sensitive_posts_aggregate?: Maybe<Sensitive_Post_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Group_Stddev_Fields = {
  __typename?: 'group_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Group_Stddev_Pop_Fields = {
  __typename?: 'group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Group_Stddev_Samp_Fields = {
  __typename?: 'group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Group_Sum_Fields = {
  __typename?: 'group_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Group_Var_Pop_Fields = {
  __typename?: 'group_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Group_Var_Samp_Fields = {
  __typename?: 'group_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Group_Variance_Fields = {
  __typename?: 'group_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "group_xref_users" */
export type Group_Xref_Users = {
  __typename?: 'group_xref_users';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  group: Group;
  group_id: Scalars['Int'];
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Auth_Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "group_xref_users" */
export type Group_Xref_Users_Aggregate = {
  __typename?: 'group_xref_users_aggregate';
  aggregate?: Maybe<Group_Xref_Users_Aggregate_Fields>;
  nodes: Array<Group_Xref_Users>;
};

/** aggregate fields of "group_xref_users" */
export type Group_Xref_Users_Aggregate_Fields = {
  __typename?: 'group_xref_users_aggregate_fields';
  avg?: Maybe<Group_Xref_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Xref_Users_Max_Fields>;
  min?: Maybe<Group_Xref_Users_Min_Fields>;
  stddev?: Maybe<Group_Xref_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Xref_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Xref_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Xref_Users_Sum_Fields>;
  var_pop?: Maybe<Group_Xref_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Xref_Users_Var_Samp_Fields>;
  variance?: Maybe<Group_Xref_Users_Variance_Fields>;
};


/** aggregate fields of "group_xref_users" */
export type Group_Xref_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_xref_users" */
export type Group_Xref_Users_Aggregate_Order_By = {
  avg?: Maybe<Group_Xref_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Xref_Users_Max_Order_By>;
  min?: Maybe<Group_Xref_Users_Min_Order_By>;
  stddev?: Maybe<Group_Xref_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Group_Xref_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Group_Xref_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Group_Xref_Users_Sum_Order_By>;
  var_pop?: Maybe<Group_Xref_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Group_Xref_Users_Var_Samp_Order_By>;
  variance?: Maybe<Group_Xref_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "group_xref_users" */
export type Group_Xref_Users_Arr_Rel_Insert_Input = {
  data: Array<Group_Xref_Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_Xref_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Group_Xref_Users_Avg_Fields = {
  __typename?: 'group_xref_users_avg_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_xref_users" */
export type Group_Xref_Users_Avg_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_xref_users". All fields are combined with a logical 'AND'. */
export type Group_Xref_Users_Bool_Exp = {
  _and?: Maybe<Array<Group_Xref_Users_Bool_Exp>>;
  _not?: Maybe<Group_Xref_Users_Bool_Exp>;
  _or?: Maybe<Array<Group_Xref_Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Group_Bool_Exp>;
  group_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Auth_Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_xref_users" */
export enum Group_Xref_Users_Constraint {
  /** unique or primary key constraint */
  GroupXrefUsersPkey = 'group_xref_users_pkey'
}

/** input type for incrementing numeric columns in table "group_xref_users" */
export type Group_Xref_Users_Inc_Input = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group_xref_users" */
export type Group_Xref_Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Auth_Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Group_Xref_Users_Max_Fields = {
  __typename?: 'group_xref_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "group_xref_users" */
export type Group_Xref_Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Xref_Users_Min_Fields = {
  __typename?: 'group_xref_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "group_xref_users" */
export type Group_Xref_Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_xref_users" */
export type Group_Xref_Users_Mutation_Response = {
  __typename?: 'group_xref_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_Xref_Users>;
};

/** on conflict condition type for table "group_xref_users" */
export type Group_Xref_Users_On_Conflict = {
  constraint: Group_Xref_Users_Constraint;
  update_columns?: Array<Group_Xref_Users_Update_Column>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "group_xref_users". */
export type Group_Xref_Users_Order_By = {
  created_at?: Maybe<Order_By>;
  group?: Maybe<Group_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Auth_Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: group_xref_users */
export type Group_Xref_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "group_xref_users" */
export enum Group_Xref_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "group_xref_users" */
export type Group_Xref_Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Group_Xref_Users_Stddev_Fields = {
  __typename?: 'group_xref_users_stddev_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_xref_users" */
export type Group_Xref_Users_Stddev_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Xref_Users_Stddev_Pop_Fields = {
  __typename?: 'group_xref_users_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_xref_users" */
export type Group_Xref_Users_Stddev_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Xref_Users_Stddev_Samp_Fields = {
  __typename?: 'group_xref_users_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_xref_users" */
export type Group_Xref_Users_Stddev_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_Xref_Users_Sum_Fields = {
  __typename?: 'group_xref_users_sum_fields';
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_xref_users" */
export type Group_Xref_Users_Sum_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "group_xref_users" */
export enum Group_Xref_Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Group_Xref_Users_Var_Pop_Fields = {
  __typename?: 'group_xref_users_var_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_xref_users" */
export type Group_Xref_Users_Var_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Xref_Users_Var_Samp_Fields = {
  __typename?: 'group_xref_users_var_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_xref_users" */
export type Group_Xref_Users_Var_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Xref_Users_Variance_Fields = {
  __typename?: 'group_xref_users_variance_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_xref_users" */
export type Group_Xref_Users_Variance_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "meta_field" */
export type Meta_Field = {
  __typename?: 'meta_field';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  meta_key: Meta_Key;
  meta_key_id: Scalars['Int'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** aggregated selection of "meta_field" */
export type Meta_Field_Aggregate = {
  __typename?: 'meta_field_aggregate';
  aggregate?: Maybe<Meta_Field_Aggregate_Fields>;
  nodes: Array<Meta_Field>;
};

/** aggregate fields of "meta_field" */
export type Meta_Field_Aggregate_Fields = {
  __typename?: 'meta_field_aggregate_fields';
  avg?: Maybe<Meta_Field_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Meta_Field_Max_Fields>;
  min?: Maybe<Meta_Field_Min_Fields>;
  stddev?: Maybe<Meta_Field_Stddev_Fields>;
  stddev_pop?: Maybe<Meta_Field_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meta_Field_Stddev_Samp_Fields>;
  sum?: Maybe<Meta_Field_Sum_Fields>;
  var_pop?: Maybe<Meta_Field_Var_Pop_Fields>;
  var_samp?: Maybe<Meta_Field_Var_Samp_Fields>;
  variance?: Maybe<Meta_Field_Variance_Fields>;
};


/** aggregate fields of "meta_field" */
export type Meta_Field_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meta_Field_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "meta_field" */
export type Meta_Field_Aggregate_Order_By = {
  avg?: Maybe<Meta_Field_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Meta_Field_Max_Order_By>;
  min?: Maybe<Meta_Field_Min_Order_By>;
  stddev?: Maybe<Meta_Field_Stddev_Order_By>;
  stddev_pop?: Maybe<Meta_Field_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Meta_Field_Stddev_Samp_Order_By>;
  sum?: Maybe<Meta_Field_Sum_Order_By>;
  var_pop?: Maybe<Meta_Field_Var_Pop_Order_By>;
  var_samp?: Maybe<Meta_Field_Var_Samp_Order_By>;
  variance?: Maybe<Meta_Field_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meta_field" */
export type Meta_Field_Arr_Rel_Insert_Input = {
  data: Array<Meta_Field_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Meta_Field_On_Conflict>;
};

/** aggregate avg on columns */
export type Meta_Field_Avg_Fields = {
  __typename?: 'meta_field_avg_fields';
  id?: Maybe<Scalars['Float']>;
  meta_key_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "meta_field" */
export type Meta_Field_Avg_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meta_field". All fields are combined with a logical 'AND'. */
export type Meta_Field_Bool_Exp = {
  _and?: Maybe<Array<Meta_Field_Bool_Exp>>;
  _not?: Maybe<Meta_Field_Bool_Exp>;
  _or?: Maybe<Array<Meta_Field_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  meta_key?: Maybe<Meta_Key_Bool_Exp>;
  meta_key_id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "meta_field" */
export enum Meta_Field_Constraint {
  /** unique or primary key constraint */
  MetaFieldPkey = 'meta_field_pkey'
}

/** input type for incrementing numeric columns in table "meta_field" */
export type Meta_Field_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  meta_key_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "meta_field" */
export type Meta_Field_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meta_key?: Maybe<Meta_Key_Obj_Rel_Insert_Input>;
  meta_key_id?: Maybe<Scalars['Int']>;
  post?: Maybe<Post_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Meta_Field_Max_Fields = {
  __typename?: 'meta_field_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meta_key_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "meta_field" */
export type Meta_Field_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Meta_Field_Min_Fields = {
  __typename?: 'meta_field_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meta_key_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "meta_field" */
export type Meta_Field_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "meta_field" */
export type Meta_Field_Mutation_Response = {
  __typename?: 'meta_field_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Meta_Field>;
};

/** on conflict condition type for table "meta_field" */
export type Meta_Field_On_Conflict = {
  constraint: Meta_Field_Constraint;
  update_columns?: Array<Meta_Field_Update_Column>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};

/** Ordering options when selecting data from "meta_field". */
export type Meta_Field_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta_key?: Maybe<Meta_Key_Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post?: Maybe<Post_Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: meta_field */
export type Meta_Field_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "meta_field" */
export enum Meta_Field_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MetaKeyId = 'meta_key_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "meta_field" */
export type Meta_Field_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meta_key_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Meta_Field_Stddev_Fields = {
  __typename?: 'meta_field_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  meta_key_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "meta_field" */
export type Meta_Field_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meta_Field_Stddev_Pop_Fields = {
  __typename?: 'meta_field_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  meta_key_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "meta_field" */
export type Meta_Field_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meta_Field_Stddev_Samp_Fields = {
  __typename?: 'meta_field_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  meta_key_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "meta_field" */
export type Meta_Field_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Meta_Field_Sum_Fields = {
  __typename?: 'meta_field_sum_fields';
  id?: Maybe<Scalars['Int']>;
  meta_key_id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "meta_field" */
export type Meta_Field_Sum_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "meta_field" */
export enum Meta_Field_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MetaKeyId = 'meta_key_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Meta_Field_Var_Pop_Fields = {
  __typename?: 'meta_field_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  meta_key_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "meta_field" */
export type Meta_Field_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meta_Field_Var_Samp_Fields = {
  __typename?: 'meta_field_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  meta_key_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "meta_field" */
export type Meta_Field_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Meta_Field_Variance_Fields = {
  __typename?: 'meta_field_variance_fields';
  id?: Maybe<Scalars['Float']>;
  meta_key_id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "meta_field" */
export type Meta_Field_Variance_Order_By = {
  id?: Maybe<Order_By>;
  meta_key_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "meta_key" */
export type Meta_Key = {
  __typename?: 'meta_key';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  meta_fields: Array<Meta_Field>;
  /** An aggregate relationship */
  meta_fields_aggregate: Meta_Field_Aggregate;
  /** An object relationship */
  mission: Mission;
  mission_id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "meta_key" */
export type Meta_KeyMeta_FieldsArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};


/** columns and relationships of "meta_key" */
export type Meta_KeyMeta_Fields_AggregateArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};

/** aggregated selection of "meta_key" */
export type Meta_Key_Aggregate = {
  __typename?: 'meta_key_aggregate';
  aggregate?: Maybe<Meta_Key_Aggregate_Fields>;
  nodes: Array<Meta_Key>;
};

/** aggregate fields of "meta_key" */
export type Meta_Key_Aggregate_Fields = {
  __typename?: 'meta_key_aggregate_fields';
  avg?: Maybe<Meta_Key_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Meta_Key_Max_Fields>;
  min?: Maybe<Meta_Key_Min_Fields>;
  stddev?: Maybe<Meta_Key_Stddev_Fields>;
  stddev_pop?: Maybe<Meta_Key_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meta_Key_Stddev_Samp_Fields>;
  sum?: Maybe<Meta_Key_Sum_Fields>;
  var_pop?: Maybe<Meta_Key_Var_Pop_Fields>;
  var_samp?: Maybe<Meta_Key_Var_Samp_Fields>;
  variance?: Maybe<Meta_Key_Variance_Fields>;
};


/** aggregate fields of "meta_key" */
export type Meta_Key_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meta_Key_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "meta_key" */
export type Meta_Key_Aggregate_Order_By = {
  avg?: Maybe<Meta_Key_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Meta_Key_Max_Order_By>;
  min?: Maybe<Meta_Key_Min_Order_By>;
  stddev?: Maybe<Meta_Key_Stddev_Order_By>;
  stddev_pop?: Maybe<Meta_Key_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Meta_Key_Stddev_Samp_Order_By>;
  sum?: Maybe<Meta_Key_Sum_Order_By>;
  var_pop?: Maybe<Meta_Key_Var_Pop_Order_By>;
  var_samp?: Maybe<Meta_Key_Var_Samp_Order_By>;
  variance?: Maybe<Meta_Key_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meta_key" */
export type Meta_Key_Arr_Rel_Insert_Input = {
  data: Array<Meta_Key_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Meta_Key_On_Conflict>;
};

/** aggregate avg on columns */
export type Meta_Key_Avg_Fields = {
  __typename?: 'meta_key_avg_fields';
  id?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "meta_key" */
export type Meta_Key_Avg_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meta_key". All fields are combined with a logical 'AND'. */
export type Meta_Key_Bool_Exp = {
  _and?: Maybe<Array<Meta_Key_Bool_Exp>>;
  _not?: Maybe<Meta_Key_Bool_Exp>;
  _or?: Maybe<Array<Meta_Key_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  meta_fields?: Maybe<Meta_Field_Bool_Exp>;
  mission?: Maybe<Mission_Bool_Exp>;
  mission_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "meta_key" */
export enum Meta_Key_Constraint {
  /** unique or primary key constraint */
  MetaKeyPkey = 'meta_key_pkey'
}

/** input type for incrementing numeric columns in table "meta_key" */
export type Meta_Key_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  mission_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "meta_key" */
export type Meta_Key_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meta_fields?: Maybe<Meta_Field_Arr_Rel_Insert_Input>;
  mission?: Maybe<Mission_Obj_Rel_Insert_Input>;
  mission_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Meta_Key_Max_Fields = {
  __typename?: 'meta_key_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mission_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "meta_key" */
export type Meta_Key_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Meta_Key_Min_Fields = {
  __typename?: 'meta_key_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mission_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "meta_key" */
export type Meta_Key_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "meta_key" */
export type Meta_Key_Mutation_Response = {
  __typename?: 'meta_key_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Meta_Key>;
};

/** input type for inserting object relation for remote table "meta_key" */
export type Meta_Key_Obj_Rel_Insert_Input = {
  data: Meta_Key_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Meta_Key_On_Conflict>;
};

/** on conflict condition type for table "meta_key" */
export type Meta_Key_On_Conflict = {
  constraint: Meta_Key_Constraint;
  update_columns?: Array<Meta_Key_Update_Column>;
  where?: Maybe<Meta_Key_Bool_Exp>;
};

/** Ordering options when selecting data from "meta_key". */
export type Meta_Key_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta_fields_aggregate?: Maybe<Meta_Field_Aggregate_Order_By>;
  mission?: Maybe<Mission_Order_By>;
  mission_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: meta_key */
export type Meta_Key_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "meta_key" */
export enum Meta_Key_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MissionId = 'mission_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "meta_key" */
export type Meta_Key_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mission_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Meta_Key_Stddev_Fields = {
  __typename?: 'meta_key_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "meta_key" */
export type Meta_Key_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meta_Key_Stddev_Pop_Fields = {
  __typename?: 'meta_key_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "meta_key" */
export type Meta_Key_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meta_Key_Stddev_Samp_Fields = {
  __typename?: 'meta_key_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "meta_key" */
export type Meta_Key_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Meta_Key_Sum_Fields = {
  __typename?: 'meta_key_sum_fields';
  id?: Maybe<Scalars['Int']>;
  mission_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "meta_key" */
export type Meta_Key_Sum_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** update columns of table "meta_key" */
export enum Meta_Key_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MissionId = 'mission_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Meta_Key_Var_Pop_Fields = {
  __typename?: 'meta_key_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "meta_key" */
export type Meta_Key_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meta_Key_Var_Samp_Fields = {
  __typename?: 'meta_key_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "meta_key" */
export type Meta_Key_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Meta_Key_Variance_Fields = {
  __typename?: 'meta_key_variance_fields';
  id?: Maybe<Scalars['Float']>;
  mission_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "meta_key" */
export type Meta_Key_Variance_Order_By = {
  id?: Maybe<Order_By>;
  mission_id?: Maybe<Order_By>;
};

/** columns and relationships of "mission" */
export type Mission = {
  __typename?: 'mission';
  created_at: Scalars['timestamptz'];
  end_date?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  file?: Maybe<File>;
  id: Scalars['Int'];
  image_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  meta_keys: Array<Meta_Key>;
  /** An aggregate relationship */
  meta_keys_aggregate: Meta_Key_Aggregate;
  start_date?: Maybe<Scalars['timestamp']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "mission" */
export type MissionMeta_KeysArgs = {
  distinct_on?: Maybe<Array<Meta_Key_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Key_Order_By>>;
  where?: Maybe<Meta_Key_Bool_Exp>;
};


/** columns and relationships of "mission" */
export type MissionMeta_Keys_AggregateArgs = {
  distinct_on?: Maybe<Array<Meta_Key_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Key_Order_By>>;
  where?: Maybe<Meta_Key_Bool_Exp>;
};

/** aggregated selection of "mission" */
export type Mission_Aggregate = {
  __typename?: 'mission_aggregate';
  aggregate?: Maybe<Mission_Aggregate_Fields>;
  nodes: Array<Mission>;
};

/** aggregate fields of "mission" */
export type Mission_Aggregate_Fields = {
  __typename?: 'mission_aggregate_fields';
  avg?: Maybe<Mission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mission_Max_Fields>;
  min?: Maybe<Mission_Min_Fields>;
  stddev?: Maybe<Mission_Stddev_Fields>;
  stddev_pop?: Maybe<Mission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mission_Stddev_Samp_Fields>;
  sum?: Maybe<Mission_Sum_Fields>;
  var_pop?: Maybe<Mission_Var_Pop_Fields>;
  var_samp?: Maybe<Mission_Var_Samp_Fields>;
  variance?: Maybe<Mission_Variance_Fields>;
};


/** aggregate fields of "mission" */
export type Mission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "mission" */
export type Mission_Aggregate_Order_By = {
  avg?: Maybe<Mission_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Mission_Max_Order_By>;
  min?: Maybe<Mission_Min_Order_By>;
  stddev?: Maybe<Mission_Stddev_Order_By>;
  stddev_pop?: Maybe<Mission_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Mission_Stddev_Samp_Order_By>;
  sum?: Maybe<Mission_Sum_Order_By>;
  var_pop?: Maybe<Mission_Var_Pop_Order_By>;
  var_samp?: Maybe<Mission_Var_Samp_Order_By>;
  variance?: Maybe<Mission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "mission" */
export type Mission_Arr_Rel_Insert_Input = {
  data: Array<Mission_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Mission_On_Conflict>;
};

/** aggregate avg on columns */
export type Mission_Avg_Fields = {
  __typename?: 'mission_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "mission" */
export type Mission_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mission". All fields are combined with a logical 'AND'. */
export type Mission_Bool_Exp = {
  _and?: Maybe<Array<Mission_Bool_Exp>>;
  _not?: Maybe<Mission_Bool_Exp>;
  _or?: Maybe<Array<Mission_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  end_date?: Maybe<Timestamp_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_id?: Maybe<Uuid_Comparison_Exp>;
  meta_keys?: Maybe<Meta_Key_Bool_Exp>;
  start_date?: Maybe<Timestamp_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "mission" */
export enum Mission_Constraint {
  /** unique or primary key constraint */
  MissionPkey = 'mission_pkey'
}

/** columns and relationships of "mission_element" */
export type Mission_Element = {
  __typename?: 'mission_element';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An array relationship */
  mission_element_components_functions: Array<Mission_Element_Components_Functions>;
  /** An aggregate relationship */
  mission_element_components_functions_aggregate: Mission_Element_Components_Functions_Aggregate;
  /** An object relationship */
  tag?: Maybe<Tag>;
  tag_id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "mission_element" */
export type Mission_ElementMission_Element_Components_FunctionsArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Components_Functions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Components_Functions_Order_By>>;
  where?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
};


/** columns and relationships of "mission_element" */
export type Mission_ElementMission_Element_Components_Functions_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Components_Functions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Components_Functions_Order_By>>;
  where?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
};

/** aggregated selection of "mission_element" */
export type Mission_Element_Aggregate = {
  __typename?: 'mission_element_aggregate';
  aggregate?: Maybe<Mission_Element_Aggregate_Fields>;
  nodes: Array<Mission_Element>;
};

/** aggregate fields of "mission_element" */
export type Mission_Element_Aggregate_Fields = {
  __typename?: 'mission_element_aggregate_fields';
  avg?: Maybe<Mission_Element_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mission_Element_Max_Fields>;
  min?: Maybe<Mission_Element_Min_Fields>;
  stddev?: Maybe<Mission_Element_Stddev_Fields>;
  stddev_pop?: Maybe<Mission_Element_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mission_Element_Stddev_Samp_Fields>;
  sum?: Maybe<Mission_Element_Sum_Fields>;
  var_pop?: Maybe<Mission_Element_Var_Pop_Fields>;
  var_samp?: Maybe<Mission_Element_Var_Samp_Fields>;
  variance?: Maybe<Mission_Element_Variance_Fields>;
};


/** aggregate fields of "mission_element" */
export type Mission_Element_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mission_Element_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Mission_Element_Avg_Fields = {
  __typename?: 'mission_element_avg_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mission_element". All fields are combined with a logical 'AND'. */
export type Mission_Element_Bool_Exp = {
  _and?: Maybe<Array<Mission_Element_Bool_Exp>>;
  _not?: Maybe<Mission_Element_Bool_Exp>;
  _or?: Maybe<Array<Mission_Element_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mission_element_components_functions?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "mission_element_components_functions" */
export type Mission_Element_Components_Functions = {
  __typename?: 'mission_element_components_functions';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  mission_element: Mission_Element;
  mission_element_id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Aggregate = {
  __typename?: 'mission_element_components_functions_aggregate';
  aggregate?: Maybe<Mission_Element_Components_Functions_Aggregate_Fields>;
  nodes: Array<Mission_Element_Components_Functions>;
};

/** aggregate fields of "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Aggregate_Fields = {
  __typename?: 'mission_element_components_functions_aggregate_fields';
  avg?: Maybe<Mission_Element_Components_Functions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mission_Element_Components_Functions_Max_Fields>;
  min?: Maybe<Mission_Element_Components_Functions_Min_Fields>;
  stddev?: Maybe<Mission_Element_Components_Functions_Stddev_Fields>;
  stddev_pop?: Maybe<Mission_Element_Components_Functions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mission_Element_Components_Functions_Stddev_Samp_Fields>;
  sum?: Maybe<Mission_Element_Components_Functions_Sum_Fields>;
  var_pop?: Maybe<Mission_Element_Components_Functions_Var_Pop_Fields>;
  var_samp?: Maybe<Mission_Element_Components_Functions_Var_Samp_Fields>;
  variance?: Maybe<Mission_Element_Components_Functions_Variance_Fields>;
};


/** aggregate fields of "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mission_Element_Components_Functions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Aggregate_Order_By = {
  avg?: Maybe<Mission_Element_Components_Functions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Mission_Element_Components_Functions_Max_Order_By>;
  min?: Maybe<Mission_Element_Components_Functions_Min_Order_By>;
  stddev?: Maybe<Mission_Element_Components_Functions_Stddev_Order_By>;
  stddev_pop?: Maybe<Mission_Element_Components_Functions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Mission_Element_Components_Functions_Stddev_Samp_Order_By>;
  sum?: Maybe<Mission_Element_Components_Functions_Sum_Order_By>;
  var_pop?: Maybe<Mission_Element_Components_Functions_Var_Pop_Order_By>;
  var_samp?: Maybe<Mission_Element_Components_Functions_Var_Samp_Order_By>;
  variance?: Maybe<Mission_Element_Components_Functions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Arr_Rel_Insert_Input = {
  data: Array<Mission_Element_Components_Functions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Mission_Element_Components_Functions_On_Conflict>;
};

/** aggregate avg on columns */
export type Mission_Element_Components_Functions_Avg_Fields = {
  __typename?: 'mission_element_components_functions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  mission_element_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mission_element_components_functions". All fields are combined with a logical 'AND'. */
export type Mission_Element_Components_Functions_Bool_Exp = {
  _and?: Maybe<Array<Mission_Element_Components_Functions_Bool_Exp>>;
  _not?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
  _or?: Maybe<Array<Mission_Element_Components_Functions_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mission_element?: Maybe<Mission_Element_Bool_Exp>;
  mission_element_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "mission_element_components_functions" */
export enum Mission_Element_Components_Functions_Constraint {
  /** unique or primary key constraint */
  MissionElementsComponentsFunctionsPkey = 'mission_elements_components_functions_pkey'
}

/** input type for incrementing numeric columns in table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  mission_element_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mission_element?: Maybe<Mission_Element_Obj_Rel_Insert_Input>;
  mission_element_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Mission_Element_Components_Functions_Max_Fields = {
  __typename?: 'mission_element_components_functions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mission_element_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Mission_Element_Components_Functions_Min_Fields = {
  __typename?: 'mission_element_components_functions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mission_element_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Mutation_Response = {
  __typename?: 'mission_element_components_functions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mission_Element_Components_Functions>;
};

/** on conflict condition type for table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_On_Conflict = {
  constraint: Mission_Element_Components_Functions_Constraint;
  update_columns?: Array<Mission_Element_Components_Functions_Update_Column>;
  where?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
};

/** Ordering options when selecting data from "mission_element_components_functions". */
export type Mission_Element_Components_Functions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mission_element?: Maybe<Mission_Element_Order_By>;
  mission_element_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: mission_element_components_functions */
export type Mission_Element_Components_Functions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "mission_element_components_functions" */
export enum Mission_Element_Components_Functions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MissionElementId = 'mission_element_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mission_element_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Mission_Element_Components_Functions_Stddev_Fields = {
  __typename?: 'mission_element_components_functions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  mission_element_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Mission_Element_Components_Functions_Stddev_Pop_Fields = {
  __typename?: 'mission_element_components_functions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mission_element_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Mission_Element_Components_Functions_Stddev_Samp_Fields = {
  __typename?: 'mission_element_components_functions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mission_element_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Mission_Element_Components_Functions_Sum_Fields = {
  __typename?: 'mission_element_components_functions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  mission_element_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** update columns of table "mission_element_components_functions" */
export enum Mission_Element_Components_Functions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MissionElementId = 'mission_element_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Mission_Element_Components_Functions_Var_Pop_Fields = {
  __typename?: 'mission_element_components_functions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mission_element_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Mission_Element_Components_Functions_Var_Samp_Fields = {
  __typename?: 'mission_element_components_functions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mission_element_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Mission_Element_Components_Functions_Variance_Fields = {
  __typename?: 'mission_element_components_functions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  mission_element_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "mission_element_components_functions" */
export type Mission_Element_Components_Functions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  mission_element_id?: Maybe<Order_By>;
};

/** unique or primary key constraints on table "mission_element" */
export enum Mission_Element_Constraint {
  /** unique or primary key constraint */
  MissionElementsPkey = 'mission_elements_pkey'
}

/** input type for incrementing numeric columns in table "mission_element" */
export type Mission_Element_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "mission_element" */
export type Mission_Element_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mission_element_components_functions?: Maybe<Mission_Element_Components_Functions_Arr_Rel_Insert_Input>;
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Mission_Element_Max_Fields = {
  __typename?: 'mission_element_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Mission_Element_Min_Fields = {
  __typename?: 'mission_element_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "mission_element" */
export type Mission_Element_Mutation_Response = {
  __typename?: 'mission_element_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mission_Element>;
};

/** input type for inserting object relation for remote table "mission_element" */
export type Mission_Element_Obj_Rel_Insert_Input = {
  data: Mission_Element_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Mission_Element_On_Conflict>;
};

/** on conflict condition type for table "mission_element" */
export type Mission_Element_On_Conflict = {
  constraint: Mission_Element_Constraint;
  update_columns?: Array<Mission_Element_Update_Column>;
  where?: Maybe<Mission_Element_Bool_Exp>;
};

/** Ordering options when selecting data from "mission_element". */
export type Mission_Element_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mission_element_components_functions_aggregate?: Maybe<Mission_Element_Components_Functions_Aggregate_Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tag_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: mission_element */
export type Mission_Element_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "mission_element" */
export enum Mission_Element_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "mission_element" */
export type Mission_Element_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Mission_Element_Stddev_Fields = {
  __typename?: 'mission_element_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Mission_Element_Stddev_Pop_Fields = {
  __typename?: 'mission_element_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Mission_Element_Stddev_Samp_Fields = {
  __typename?: 'mission_element_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Mission_Element_Sum_Fields = {
  __typename?: 'mission_element_sum_fields';
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "mission_element" */
export enum Mission_Element_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Mission_Element_Var_Pop_Fields = {
  __typename?: 'mission_element_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Mission_Element_Var_Samp_Fields = {
  __typename?: 'mission_element_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Mission_Element_Variance_Fields = {
  __typename?: 'mission_element_variance_fields';
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "mission" */
export type Mission_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "mission" */
export type Mission_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamp']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['uuid']>;
  meta_keys?: Maybe<Meta_Key_Arr_Rel_Insert_Input>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Mission_Max_Fields = {
  __typename?: 'mission_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "mission" */
export type Mission_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Mission_Min_Fields = {
  __typename?: 'mission_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "mission" */
export type Mission_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "mission" */
export type Mission_Mutation_Response = {
  __typename?: 'mission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mission>;
};

/** input type for inserting object relation for remote table "mission" */
export type Mission_Obj_Rel_Insert_Input = {
  data: Mission_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Mission_On_Conflict>;
};

/** on conflict condition type for table "mission" */
export type Mission_On_Conflict = {
  constraint: Mission_Constraint;
  update_columns?: Array<Mission_Update_Column>;
  where?: Maybe<Mission_Bool_Exp>;
};

/** Ordering options when selecting data from "mission". */
export type Mission_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  meta_keys_aggregate?: Maybe<Meta_Key_Aggregate_Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: mission */
export type Mission_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "mission" */
export enum Mission_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "mission" */
export type Mission_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Mission_Stddev_Fields = {
  __typename?: 'mission_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "mission" */
export type Mission_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Mission_Stddev_Pop_Fields = {
  __typename?: 'mission_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "mission" */
export type Mission_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Mission_Stddev_Samp_Fields = {
  __typename?: 'mission_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "mission" */
export type Mission_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Mission_Sum_Fields = {
  __typename?: 'mission_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "mission" */
export type Mission_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "mission" */
export enum Mission_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Mission_Var_Pop_Fields = {
  __typename?: 'mission_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "mission" */
export type Mission_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Mission_Var_Samp_Fields = {
  __typename?: 'mission_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "mission" */
export type Mission_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Mission_Variance_Fields = {
  __typename?: 'mission_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "mission" */
export type Mission_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "equipment" */
  delete_equipment?: Maybe<Equipment_Mutation_Response>;
  /** delete single row from the table: "equipment" */
  delete_equipment_by_pk?: Maybe<Equipment>;
  /** delete data from the table: "experiment" */
  delete_experiment?: Maybe<Experiment_Mutation_Response>;
  /** delete single row from the table: "experiment" */
  delete_experiment_by_pk?: Maybe<Experiment>;
  /** delete data from the table: "experiment_type" */
  delete_experiment_type?: Maybe<Experiment_Type_Mutation_Response>;
  /** delete single row from the table: "experiment_type" */
  delete_experiment_type_by_pk?: Maybe<Experiment_Type>;
  /** delete data from the table: "file" */
  delete_file?: Maybe<File_Mutation_Response>;
  /** delete single row from the table: "file" */
  delete_file_by_pk?: Maybe<File>;
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "group_xref_users" */
  delete_group_xref_users?: Maybe<Group_Xref_Users_Mutation_Response>;
  /** delete single row from the table: "group_xref_users" */
  delete_group_xref_users_by_pk?: Maybe<Group_Xref_Users>;
  /** delete data from the table: "meta_field" */
  delete_meta_field?: Maybe<Meta_Field_Mutation_Response>;
  /** delete single row from the table: "meta_field" */
  delete_meta_field_by_pk?: Maybe<Meta_Field>;
  /** delete data from the table: "meta_key" */
  delete_meta_key?: Maybe<Meta_Key_Mutation_Response>;
  /** delete single row from the table: "meta_key" */
  delete_meta_key_by_pk?: Maybe<Meta_Key>;
  /** delete data from the table: "mission" */
  delete_mission?: Maybe<Mission_Mutation_Response>;
  /** delete single row from the table: "mission" */
  delete_mission_by_pk?: Maybe<Mission>;
  /** delete data from the table: "mission_element" */
  delete_mission_element?: Maybe<Mission_Element_Mutation_Response>;
  /** delete single row from the table: "mission_element" */
  delete_mission_element_by_pk?: Maybe<Mission_Element>;
  /** delete data from the table: "mission_element_components_functions" */
  delete_mission_element_components_functions?: Maybe<Mission_Element_Components_Functions_Mutation_Response>;
  /** delete single row from the table: "mission_element_components_functions" */
  delete_mission_element_components_functions_by_pk?: Maybe<Mission_Element_Components_Functions>;
  /** delete data from the table: "post" */
  delete_post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "post" */
  delete_post_by_pk?: Maybe<Post>;
  /** delete data from the table: "post_tags" */
  delete_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** delete single row from the table: "post_tags" */
  delete_post_tags_by_pk?: Maybe<Post_Tags>;
  /** delete data from the table: "sensitive_post" */
  delete_sensitive_post?: Maybe<Sensitive_Post_Mutation_Response>;
  /** delete single row from the table: "sensitive_post" */
  delete_sensitive_post_by_pk?: Maybe<Sensitive_Post>;
  /** delete data from the table: "tag" */
  delete_tag?: Maybe<Tag_Mutation_Response>;
  /** delete single row from the table: "tag" */
  delete_tag_by_pk?: Maybe<Tag>;
  /** delete data from the table: "tag_category" */
  delete_tag_category?: Maybe<Tag_Category_Mutation_Response>;
  /** delete single row from the table: "tag_category" */
  delete_tag_category_by_pk?: Maybe<Tag_Category>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "equipment" */
  insert_equipment?: Maybe<Equipment_Mutation_Response>;
  /** insert a single row into the table: "equipment" */
  insert_equipment_one?: Maybe<Equipment>;
  /** insert data into the table: "experiment" */
  insert_experiment?: Maybe<Experiment_Mutation_Response>;
  /** insert a single row into the table: "experiment" */
  insert_experiment_one?: Maybe<Experiment>;
  /** insert data into the table: "experiment_type" */
  insert_experiment_type?: Maybe<Experiment_Type_Mutation_Response>;
  /** insert a single row into the table: "experiment_type" */
  insert_experiment_type_one?: Maybe<Experiment_Type>;
  /** insert data into the table: "file" */
  insert_file?: Maybe<File_Mutation_Response>;
  /** insert a single row into the table: "file" */
  insert_file_one?: Maybe<File>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "group_xref_users" */
  insert_group_xref_users?: Maybe<Group_Xref_Users_Mutation_Response>;
  /** insert a single row into the table: "group_xref_users" */
  insert_group_xref_users_one?: Maybe<Group_Xref_Users>;
  /** insert data into the table: "meta_field" */
  insert_meta_field?: Maybe<Meta_Field_Mutation_Response>;
  /** insert a single row into the table: "meta_field" */
  insert_meta_field_one?: Maybe<Meta_Field>;
  /** insert data into the table: "meta_key" */
  insert_meta_key?: Maybe<Meta_Key_Mutation_Response>;
  /** insert a single row into the table: "meta_key" */
  insert_meta_key_one?: Maybe<Meta_Key>;
  /** insert data into the table: "mission" */
  insert_mission?: Maybe<Mission_Mutation_Response>;
  /** insert data into the table: "mission_element" */
  insert_mission_element?: Maybe<Mission_Element_Mutation_Response>;
  /** insert data into the table: "mission_element_components_functions" */
  insert_mission_element_components_functions?: Maybe<Mission_Element_Components_Functions_Mutation_Response>;
  /** insert a single row into the table: "mission_element_components_functions" */
  insert_mission_element_components_functions_one?: Maybe<Mission_Element_Components_Functions>;
  /** insert a single row into the table: "mission_element" */
  insert_mission_element_one?: Maybe<Mission_Element>;
  /** insert a single row into the table: "mission" */
  insert_mission_one?: Maybe<Mission>;
  /** insert data into the table: "post" */
  insert_post?: Maybe<Post_Mutation_Response>;
  /** insert a single row into the table: "post" */
  insert_post_one?: Maybe<Post>;
  /** insert data into the table: "post_tags" */
  insert_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** insert a single row into the table: "post_tags" */
  insert_post_tags_one?: Maybe<Post_Tags>;
  /** insert data into the table: "sensitive_post" */
  insert_sensitive_post?: Maybe<Sensitive_Post_Mutation_Response>;
  /** insert a single row into the table: "sensitive_post" */
  insert_sensitive_post_one?: Maybe<Sensitive_Post>;
  /** insert data into the table: "tag" */
  insert_tag?: Maybe<Tag_Mutation_Response>;
  /** insert data into the table: "tag_category" */
  insert_tag_category?: Maybe<Tag_Category_Mutation_Response>;
  /** insert a single row into the table: "tag_category" */
  insert_tag_category_one?: Maybe<Tag_Category>;
  /** insert a single row into the table: "tag" */
  insert_tag_one?: Maybe<Tag>;
  login?: Maybe<LoginResult>;
  register?: Maybe<RegisterResult>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update data of the table: "equipment" */
  update_equipment?: Maybe<Equipment_Mutation_Response>;
  /** update single row of the table: "equipment" */
  update_equipment_by_pk?: Maybe<Equipment>;
  /** update data of the table: "experiment" */
  update_experiment?: Maybe<Experiment_Mutation_Response>;
  /** update single row of the table: "experiment" */
  update_experiment_by_pk?: Maybe<Experiment>;
  /** update data of the table: "experiment_type" */
  update_experiment_type?: Maybe<Experiment_Type_Mutation_Response>;
  /** update single row of the table: "experiment_type" */
  update_experiment_type_by_pk?: Maybe<Experiment_Type>;
  /** update data of the table: "file" */
  update_file?: Maybe<File_Mutation_Response>;
  /** update single row of the table: "file" */
  update_file_by_pk?: Maybe<File>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update data of the table: "group_xref_users" */
  update_group_xref_users?: Maybe<Group_Xref_Users_Mutation_Response>;
  /** update single row of the table: "group_xref_users" */
  update_group_xref_users_by_pk?: Maybe<Group_Xref_Users>;
  /** update data of the table: "meta_field" */
  update_meta_field?: Maybe<Meta_Field_Mutation_Response>;
  /** update single row of the table: "meta_field" */
  update_meta_field_by_pk?: Maybe<Meta_Field>;
  /** update data of the table: "meta_key" */
  update_meta_key?: Maybe<Meta_Key_Mutation_Response>;
  /** update single row of the table: "meta_key" */
  update_meta_key_by_pk?: Maybe<Meta_Key>;
  /** update data of the table: "mission" */
  update_mission?: Maybe<Mission_Mutation_Response>;
  /** update single row of the table: "mission" */
  update_mission_by_pk?: Maybe<Mission>;
  /** update data of the table: "mission_element" */
  update_mission_element?: Maybe<Mission_Element_Mutation_Response>;
  /** update single row of the table: "mission_element" */
  update_mission_element_by_pk?: Maybe<Mission_Element>;
  /** update data of the table: "mission_element_components_functions" */
  update_mission_element_components_functions?: Maybe<Mission_Element_Components_Functions_Mutation_Response>;
  /** update single row of the table: "mission_element_components_functions" */
  update_mission_element_components_functions_by_pk?: Maybe<Mission_Element_Components_Functions>;
  /** update data of the table: "post" */
  update_post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "post" */
  update_post_by_pk?: Maybe<Post>;
  /** update data of the table: "post_tags" */
  update_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** update single row of the table: "post_tags" */
  update_post_tags_by_pk?: Maybe<Post_Tags>;
  /** update data of the table: "sensitive_post" */
  update_sensitive_post?: Maybe<Sensitive_Post_Mutation_Response>;
  /** update single row of the table: "sensitive_post" */
  update_sensitive_post_by_pk?: Maybe<Sensitive_Post>;
  /** update data of the table: "tag" */
  update_tag?: Maybe<Tag_Mutation_Response>;
  /** update single row of the table: "tag" */
  update_tag_by_pk?: Maybe<Tag>;
  /** update data of the table: "tag_category" */
  update_tag_category?: Maybe<Tag_Category_Mutation_Response>;
  /** update single row of the table: "tag_category" */
  update_tag_category_by_pk?: Maybe<Tag_Category>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EquipmentArgs = {
  where: Equipment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Equipment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ExperimentArgs = {
  where: Experiment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Experiment_TypeArgs = {
  where: Experiment_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiment_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FileArgs = {
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Group_Xref_UsersArgs = {
  where: Group_Xref_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_Xref_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Meta_FieldArgs = {
  where: Meta_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meta_Field_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Meta_KeyArgs = {
  where: Meta_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meta_Key_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MissionArgs = {
  where: Mission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mission_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Mission_ElementArgs = {
  where: Mission_Element_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mission_Element_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Mission_Element_Components_FunctionsArgs = {
  where: Mission_Element_Components_Functions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mission_Element_Components_Functions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TagsArgs = {
  where: Post_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Sensitive_PostArgs = {
  where: Sensitive_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sensitive_Post_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Tag_CategoryArgs = {
  where: Tag_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tag_Category_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EquipmentArgs = {
  objects: Array<Equipment_Insert_Input>;
  on_conflict?: Maybe<Equipment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Equipment_OneArgs = {
  object: Equipment_Insert_Input;
  on_conflict?: Maybe<Equipment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExperimentArgs = {
  objects: Array<Experiment_Insert_Input>;
  on_conflict?: Maybe<Experiment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiment_OneArgs = {
  object: Experiment_Insert_Input;
  on_conflict?: Maybe<Experiment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiment_TypeArgs = {
  objects: Array<Experiment_Type_Insert_Input>;
  on_conflict?: Maybe<Experiment_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiment_Type_OneArgs = {
  object: Experiment_Type_Insert_Input;
  on_conflict?: Maybe<Experiment_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FileArgs = {
  objects: Array<File_Insert_Input>;
  on_conflict?: Maybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_OneArgs = {
  object: File_Insert_Input;
  on_conflict?: Maybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Xref_UsersArgs = {
  objects: Array<Group_Xref_Users_Insert_Input>;
  on_conflict?: Maybe<Group_Xref_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_Xref_Users_OneArgs = {
  object: Group_Xref_Users_Insert_Input;
  on_conflict?: Maybe<Group_Xref_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meta_FieldArgs = {
  objects: Array<Meta_Field_Insert_Input>;
  on_conflict?: Maybe<Meta_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meta_Field_OneArgs = {
  object: Meta_Field_Insert_Input;
  on_conflict?: Maybe<Meta_Field_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meta_KeyArgs = {
  objects: Array<Meta_Key_Insert_Input>;
  on_conflict?: Maybe<Meta_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meta_Key_OneArgs = {
  object: Meta_Key_Insert_Input;
  on_conflict?: Maybe<Meta_Key_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MissionArgs = {
  objects: Array<Mission_Insert_Input>;
  on_conflict?: Maybe<Mission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mission_ElementArgs = {
  objects: Array<Mission_Element_Insert_Input>;
  on_conflict?: Maybe<Mission_Element_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mission_Element_Components_FunctionsArgs = {
  objects: Array<Mission_Element_Components_Functions_Insert_Input>;
  on_conflict?: Maybe<Mission_Element_Components_Functions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mission_Element_Components_Functions_OneArgs = {
  object: Mission_Element_Components_Functions_Insert_Input;
  on_conflict?: Maybe<Mission_Element_Components_Functions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mission_Element_OneArgs = {
  object: Mission_Element_Insert_Input;
  on_conflict?: Maybe<Mission_Element_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mission_OneArgs = {
  object: Mission_Insert_Input;
  on_conflict?: Maybe<Mission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: Maybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: Maybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TagsArgs = {
  objects: Array<Post_Tags_Insert_Input>;
  on_conflict?: Maybe<Post_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Tags_OneArgs = {
  object: Post_Tags_Insert_Input;
  on_conflict?: Maybe<Post_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sensitive_PostArgs = {
  objects: Array<Sensitive_Post_Insert_Input>;
  on_conflict?: Maybe<Sensitive_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sensitive_Post_OneArgs = {
  object: Sensitive_Post_Insert_Input;
  on_conflict?: Maybe<Sensitive_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>;
  on_conflict?: Maybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_CategoryArgs = {
  objects: Array<Tag_Category_Insert_Input>;
  on_conflict?: Maybe<Tag_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_Category_OneArgs = {
  object: Tag_Category_Insert_Input;
  on_conflict?: Maybe<Tag_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_OneArgs = {
  object: Tag_Insert_Input;
  on_conflict?: Maybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  args: LoginArgs;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  args: RegisterArgs;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EquipmentArgs = {
  _inc?: Maybe<Equipment_Inc_Input>;
  _set?: Maybe<Equipment_Set_Input>;
  where: Equipment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Equipment_By_PkArgs = {
  _inc?: Maybe<Equipment_Inc_Input>;
  _set?: Maybe<Equipment_Set_Input>;
  pk_columns: Equipment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ExperimentArgs = {
  _inc?: Maybe<Experiment_Inc_Input>;
  _set?: Maybe<Experiment_Set_Input>;
  where: Experiment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiment_By_PkArgs = {
  _inc?: Maybe<Experiment_Inc_Input>;
  _set?: Maybe<Experiment_Set_Input>;
  pk_columns: Experiment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experiment_TypeArgs = {
  _set?: Maybe<Experiment_Type_Set_Input>;
  where: Experiment_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiment_Type_By_PkArgs = {
  _set?: Maybe<Experiment_Type_Set_Input>;
  pk_columns: Experiment_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FileArgs = {
  _inc?: Maybe<File_Inc_Input>;
  _set?: Maybe<File_Set_Input>;
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_By_PkArgs = {
  _inc?: Maybe<File_Inc_Input>;
  _set?: Maybe<File_Set_Input>;
  pk_columns: File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Xref_UsersArgs = {
  _inc?: Maybe<Group_Xref_Users_Inc_Input>;
  _set?: Maybe<Group_Xref_Users_Set_Input>;
  where: Group_Xref_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_Xref_Users_By_PkArgs = {
  _inc?: Maybe<Group_Xref_Users_Inc_Input>;
  _set?: Maybe<Group_Xref_Users_Set_Input>;
  pk_columns: Group_Xref_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meta_FieldArgs = {
  _inc?: Maybe<Meta_Field_Inc_Input>;
  _set?: Maybe<Meta_Field_Set_Input>;
  where: Meta_Field_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meta_Field_By_PkArgs = {
  _inc?: Maybe<Meta_Field_Inc_Input>;
  _set?: Maybe<Meta_Field_Set_Input>;
  pk_columns: Meta_Field_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meta_KeyArgs = {
  _inc?: Maybe<Meta_Key_Inc_Input>;
  _set?: Maybe<Meta_Key_Set_Input>;
  where: Meta_Key_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meta_Key_By_PkArgs = {
  _inc?: Maybe<Meta_Key_Inc_Input>;
  _set?: Maybe<Meta_Key_Set_Input>;
  pk_columns: Meta_Key_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MissionArgs = {
  _inc?: Maybe<Mission_Inc_Input>;
  _set?: Maybe<Mission_Set_Input>;
  where: Mission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mission_By_PkArgs = {
  _inc?: Maybe<Mission_Inc_Input>;
  _set?: Maybe<Mission_Set_Input>;
  pk_columns: Mission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Mission_ElementArgs = {
  _inc?: Maybe<Mission_Element_Inc_Input>;
  _set?: Maybe<Mission_Element_Set_Input>;
  where: Mission_Element_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mission_Element_By_PkArgs = {
  _inc?: Maybe<Mission_Element_Inc_Input>;
  _set?: Maybe<Mission_Element_Set_Input>;
  pk_columns: Mission_Element_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Mission_Element_Components_FunctionsArgs = {
  _inc?: Maybe<Mission_Element_Components_Functions_Inc_Input>;
  _set?: Maybe<Mission_Element_Components_Functions_Set_Input>;
  where: Mission_Element_Components_Functions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mission_Element_Components_Functions_By_PkArgs = {
  _inc?: Maybe<Mission_Element_Components_Functions_Inc_Input>;
  _set?: Maybe<Mission_Element_Components_Functions_Set_Input>;
  pk_columns: Mission_Element_Components_Functions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _inc?: Maybe<Post_Inc_Input>;
  _set?: Maybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _inc?: Maybe<Post_Inc_Input>;
  _set?: Maybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TagsArgs = {
  _inc?: Maybe<Post_Tags_Inc_Input>;
  _set?: Maybe<Post_Tags_Set_Input>;
  where: Post_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tags_By_PkArgs = {
  _inc?: Maybe<Post_Tags_Inc_Input>;
  _set?: Maybe<Post_Tags_Set_Input>;
  pk_columns: Post_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sensitive_PostArgs = {
  _inc?: Maybe<Sensitive_Post_Inc_Input>;
  _set?: Maybe<Sensitive_Post_Set_Input>;
  where: Sensitive_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sensitive_Post_By_PkArgs = {
  _inc?: Maybe<Sensitive_Post_Inc_Input>;
  _set?: Maybe<Sensitive_Post_Set_Input>;
  pk_columns: Sensitive_Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TagArgs = {
  _inc?: Maybe<Tag_Inc_Input>;
  _set?: Maybe<Tag_Set_Input>;
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_By_PkArgs = {
  _inc?: Maybe<Tag_Inc_Input>;
  _set?: Maybe<Tag_Set_Input>;
  pk_columns: Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_CategoryArgs = {
  _inc?: Maybe<Tag_Category_Inc_Input>;
  _set?: Maybe<Tag_Category_Set_Input>;
  where: Tag_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_Category_By_PkArgs = {
  _inc?: Maybe<Tag_Category_Inc_Input>;
  _set?: Maybe<Tag_Category_Set_Input>;
  pk_columns: Tag_Category_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "post" */
export type Post = {
  __typename?: 'post';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  file?: Maybe<File>;
  file_id?: Maybe<Scalars['uuid']>;
  id: Scalars['Int'];
  is_locked: Scalars['Boolean'];
  /** An array relationship */
  meta_fields: Array<Meta_Field>;
  /** An aggregate relationship */
  meta_fields_aggregate: Meta_Field_Aggregate;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
  /** An object relationship */
  related_post?: Maybe<Post>;
  related_post_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  sensitive_posts: Array<Sensitive_Post>;
  /** An aggregate relationship */
  sensitive_posts_aggregate: Sensitive_Post_Aggregate;
  text?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Auth_Users;
  user_id: Scalars['Int'];
};


/** columns and relationships of "post" */
export type PostMeta_FieldsArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostMeta_Fields_AggregateArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostPost_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostPost_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostPostsArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostSensitive_PostsArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostSensitive_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: 'post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: 'post_aggregate_fields';
  avg?: Maybe<Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
  stddev?: Maybe<Post_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Sum_Fields>;
  var_pop?: Maybe<Post_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Var_Samp_Fields>;
  variance?: Maybe<Post_Variance_Fields>;
};


/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post" */
export type Post_Aggregate_Order_By = {
  avg?: Maybe<Post_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Max_Order_By>;
  min?: Maybe<Post_Min_Order_By>;
  stddev?: Maybe<Post_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Sum_Order_By>;
  var_pop?: Maybe<Post_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Var_Samp_Order_By>;
  variance?: Maybe<Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Avg_Fields = {
  __typename?: 'post_avg_fields';
  id?: Maybe<Scalars['Float']>;
  related_post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post" */
export type Post_Avg_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: Maybe<Array<Post_Bool_Exp>>;
  _not?: Maybe<Post_Bool_Exp>;
  _or?: Maybe<Array<Post_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  file?: Maybe<File_Bool_Exp>;
  file_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_locked?: Maybe<Boolean_Comparison_Exp>;
  meta_fields?: Maybe<Meta_Field_Bool_Exp>;
  post_tags?: Maybe<Post_Tags_Bool_Exp>;
  posts?: Maybe<Post_Bool_Exp>;
  related_post?: Maybe<Post_Bool_Exp>;
  related_post_id?: Maybe<Int_Comparison_Exp>;
  sensitive_posts?: Maybe<Sensitive_Post_Bool_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Auth_Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "post" */
export enum Post_Constraint {
  /** unique or primary key constraint */
  PostPkey = 'post_pkey'
}

/** input type for incrementing numeric columns in table "post" */
export type Post_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  related_post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post" */
export type Post_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  file?: Maybe<File_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Boolean']>;
  meta_fields?: Maybe<Meta_Field_Arr_Rel_Insert_Input>;
  post_tags?: Maybe<Post_Tags_Arr_Rel_Insert_Input>;
  posts?: Maybe<Post_Arr_Rel_Insert_Input>;
  related_post?: Maybe<Post_Obj_Rel_Insert_Input>;
  related_post_id?: Maybe<Scalars['Int']>;
  sensitive_posts?: Maybe<Sensitive_Post_Arr_Rel_Insert_Input>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Auth_Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: 'post_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  related_post_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: 'post_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  related_post_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "post" */
export type Post_Mutation_Response = {
  __typename?: 'post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Post_On_Conflict>;
};

/** on conflict condition type for table "post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: Maybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "post". */
export type Post_Order_By = {
  created_at?: Maybe<Order_By>;
  file?: Maybe<File_Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_locked?: Maybe<Order_By>;
  meta_fields_aggregate?: Maybe<Meta_Field_Aggregate_Order_By>;
  post_tags_aggregate?: Maybe<Post_Tags_Aggregate_Order_By>;
  posts_aggregate?: Maybe<Post_Aggregate_Order_By>;
  related_post?: Maybe<Post_Order_By>;
  related_post_id?: Maybe<Order_By>;
  sensitive_posts_aggregate?: Maybe<Sensitive_Post_Aggregate_Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Auth_Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: post */
export type Post_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocked = 'is_locked',
  /** column name */
  RelatedPostId = 'related_post_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "post" */
export type Post_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  is_locked?: Maybe<Scalars['Boolean']>;
  related_post_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Post_Stddev_Fields = {
  __typename?: 'post_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  related_post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post" */
export type Post_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Stddev_Pop_Fields = {
  __typename?: 'post_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  related_post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post" */
export type Post_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Stddev_Samp_Fields = {
  __typename?: 'post_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  related_post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post" */
export type Post_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Sum_Fields = {
  __typename?: 'post_sum_fields';
  id?: Maybe<Scalars['Int']>;
  related_post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post" */
export type Post_Sum_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_tags" */
export type Post_Tags = {
  __typename?: 'post_tags';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['Int'];
  /** An object relationship */
  tag: Tag;
  tag_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "post_tags" */
export type Post_Tags_Aggregate = {
  __typename?: 'post_tags_aggregate';
  aggregate?: Maybe<Post_Tags_Aggregate_Fields>;
  nodes: Array<Post_Tags>;
};

/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_Fields = {
  __typename?: 'post_tags_aggregate_fields';
  avg?: Maybe<Post_Tags_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Tags_Max_Fields>;
  min?: Maybe<Post_Tags_Min_Fields>;
  stddev?: Maybe<Post_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Tags_Sum_Fields>;
  var_pop?: Maybe<Post_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Tags_Var_Samp_Fields>;
  variance?: Maybe<Post_Tags_Variance_Fields>;
};


/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_tags" */
export type Post_Tags_Aggregate_Order_By = {
  avg?: Maybe<Post_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Tags_Max_Order_By>;
  min?: Maybe<Post_Tags_Min_Order_By>;
  stddev?: Maybe<Post_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Tags_Sum_Order_By>;
  var_pop?: Maybe<Post_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Post_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_tags" */
export type Post_Tags_Arr_Rel_Insert_Input = {
  data: Array<Post_Tags_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Post_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Tags_Avg_Fields = {
  __typename?: 'post_tags_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_tags" */
export type Post_Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_tags". All fields are combined with a logical 'AND'. */
export type Post_Tags_Bool_Exp = {
  _and?: Maybe<Array<Post_Tags_Bool_Exp>>;
  _not?: Maybe<Post_Tags_Bool_Exp>;
  _or?: Maybe<Array<Post_Tags_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_tags" */
export enum Post_Tags_Constraint {
  /** unique or primary key constraint */
  PostTagsPkey = 'post_tags_pkey'
}

/** input type for incrementing numeric columns in table "post_tags" */
export type Post_Tags_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_tags" */
export type Post_Tags_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Post_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Post_Tags_Max_Fields = {
  __typename?: 'post_tags_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "post_tags" */
export type Post_Tags_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Tags_Min_Fields = {
  __typename?: 'post_tags_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "post_tags" */
export type Post_Tags_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_tags" */
export type Post_Tags_Mutation_Response = {
  __typename?: 'post_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Tags>;
};

/** on conflict condition type for table "post_tags" */
export type Post_Tags_On_Conflict = {
  constraint: Post_Tags_Constraint;
  update_columns?: Array<Post_Tags_Update_Column>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "post_tags". */
export type Post_Tags_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Post_Order_By>;
  post_id?: Maybe<Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: post_tags */
export type Post_Tags_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_tags" */
export enum Post_Tags_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "post_tags" */
export type Post_Tags_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Post_Tags_Stddev_Fields = {
  __typename?: 'post_tags_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_tags" */
export type Post_Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Tags_Stddev_Pop_Fields = {
  __typename?: 'post_tags_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_tags" */
export type Post_Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Tags_Stddev_Samp_Fields = {
  __typename?: 'post_tags_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_tags" */
export type Post_Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Tags_Sum_Fields = {
  __typename?: 'post_tags_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_tags" */
export type Post_Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** update columns of table "post_tags" */
export enum Post_Tags_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Post_Tags_Var_Pop_Fields = {
  __typename?: 'post_tags_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_tags" */
export type Post_Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Tags_Var_Samp_Fields = {
  __typename?: 'post_tags_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_tags" */
export type Post_Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Tags_Variance_Fields = {
  __typename?: 'post_tags_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_tags" */
export type Post_Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** update columns of table "post" */
export enum Post_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocked = 'is_locked',
  /** column name */
  RelatedPostId = 'related_post_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Post_Var_Pop_Fields = {
  __typename?: 'post_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  related_post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post" */
export type Post_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Var_Samp_Fields = {
  __typename?: 'post_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  related_post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post" */
export type Post_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Variance_Fields = {
  __typename?: 'post_variance_fields';
  id?: Maybe<Scalars['Float']>;
  related_post_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post" */
export type Post_Variance_Order_By = {
  id?: Maybe<Order_By>;
  related_post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** An array relationship */
  equipment: Array<Equipment>;
  /** An aggregate relationship */
  equipment_aggregate: Equipment_Aggregate;
  /** fetch data from the table: "equipment" using primary key columns */
  equipment_by_pk?: Maybe<Equipment>;
  /** fetch data from the table: "experiment" */
  experiment: Array<Experiment>;
  /** fetch aggregated fields from the table: "experiment" */
  experiment_aggregate: Experiment_Aggregate;
  /** fetch data from the table: "experiment" using primary key columns */
  experiment_by_pk?: Maybe<Experiment>;
  /** fetch data from the table: "experiment_type" */
  experiment_type: Array<Experiment_Type>;
  /** fetch aggregated fields from the table: "experiment_type" */
  experiment_type_aggregate: Experiment_Type_Aggregate;
  /** fetch data from the table: "experiment_type" using primary key columns */
  experiment_type_by_pk?: Maybe<Experiment_Type>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** An array relationship */
  group_xref_users: Array<Group_Xref_Users>;
  /** An aggregate relationship */
  group_xref_users_aggregate: Group_Xref_Users_Aggregate;
  /** fetch data from the table: "group_xref_users" using primary key columns */
  group_xref_users_by_pk?: Maybe<Group_Xref_Users>;
  /** fetch data from the table: "meta_field" */
  meta_field: Array<Meta_Field>;
  /** fetch aggregated fields from the table: "meta_field" */
  meta_field_aggregate: Meta_Field_Aggregate;
  /** fetch data from the table: "meta_field" using primary key columns */
  meta_field_by_pk?: Maybe<Meta_Field>;
  /** fetch data from the table: "meta_key" */
  meta_key: Array<Meta_Key>;
  /** fetch aggregated fields from the table: "meta_key" */
  meta_key_aggregate: Meta_Key_Aggregate;
  /** fetch data from the table: "meta_key" using primary key columns */
  meta_key_by_pk?: Maybe<Meta_Key>;
  /** fetch data from the table: "mission" */
  mission: Array<Mission>;
  /** fetch aggregated fields from the table: "mission" */
  mission_aggregate: Mission_Aggregate;
  /** fetch data from the table: "mission" using primary key columns */
  mission_by_pk?: Maybe<Mission>;
  /** fetch data from the table: "mission_element" */
  mission_element: Array<Mission_Element>;
  /** fetch aggregated fields from the table: "mission_element" */
  mission_element_aggregate: Mission_Element_Aggregate;
  /** fetch data from the table: "mission_element" using primary key columns */
  mission_element_by_pk?: Maybe<Mission_Element>;
  /** An array relationship */
  mission_element_components_functions: Array<Mission_Element_Components_Functions>;
  /** An aggregate relationship */
  mission_element_components_functions_aggregate: Mission_Element_Components_Functions_Aggregate;
  /** fetch data from the table: "mission_element_components_functions" using primary key columns */
  mission_element_components_functions_by_pk?: Maybe<Mission_Element_Components_Functions>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** fetch data from the table: "sensitive_post" */
  sensitive_post: Array<Sensitive_Post>;
  /** fetch aggregated fields from the table: "sensitive_post" */
  sensitive_post_aggregate: Sensitive_Post_Aggregate;
  /** fetch data from the table: "sensitive_post" using primary key columns */
  sensitive_post_by_pk?: Maybe<Sensitive_Post>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "tag_category" */
  tag_category: Array<Tag_Category>;
  /** fetch aggregated fields from the table: "tag_category" */
  tag_category_aggregate: Tag_Category_Aggregate;
  /** fetch data from the table: "tag_category" using primary key columns */
  tag_category_by_pk?: Maybe<Tag_Category>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEquipmentArgs = {
  distinct_on?: Maybe<Array<Equipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Equipment_Order_By>>;
  where?: Maybe<Equipment_Bool_Exp>;
};


export type Query_RootEquipment_AggregateArgs = {
  distinct_on?: Maybe<Array<Equipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Equipment_Order_By>>;
  where?: Maybe<Equipment_Bool_Exp>;
};


export type Query_RootEquipment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootExperimentArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};


export type Query_RootExperiment_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};


export type Query_RootExperiment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootExperiment_TypeArgs = {
  distinct_on?: Maybe<Array<Experiment_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Type_Order_By>>;
  where?: Maybe<Experiment_Type_Bool_Exp>;
};


export type Query_RootExperiment_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiment_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Type_Order_By>>;
  where?: Maybe<Experiment_Type_Bool_Exp>;
};


export type Query_RootExperiment_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootFileArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Query_RootFile_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Query_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGroup_Xref_UsersArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};


export type Query_RootGroup_Xref_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};


export type Query_RootGroup_Xref_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMeta_FieldArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};


export type Query_RootMeta_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};


export type Query_RootMeta_Field_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMeta_KeyArgs = {
  distinct_on?: Maybe<Array<Meta_Key_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Key_Order_By>>;
  where?: Maybe<Meta_Key_Bool_Exp>;
};


export type Query_RootMeta_Key_AggregateArgs = {
  distinct_on?: Maybe<Array<Meta_Key_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Key_Order_By>>;
  where?: Maybe<Meta_Key_Bool_Exp>;
};


export type Query_RootMeta_Key_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMissionArgs = {
  distinct_on?: Maybe<Array<Mission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Order_By>>;
  where?: Maybe<Mission_Bool_Exp>;
};


export type Query_RootMission_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Order_By>>;
  where?: Maybe<Mission_Bool_Exp>;
};


export type Query_RootMission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMission_ElementArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Order_By>>;
  where?: Maybe<Mission_Element_Bool_Exp>;
};


export type Query_RootMission_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Order_By>>;
  where?: Maybe<Mission_Element_Bool_Exp>;
};


export type Query_RootMission_Element_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMission_Element_Components_FunctionsArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Components_Functions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Components_Functions_Order_By>>;
  where?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
};


export type Query_RootMission_Element_Components_Functions_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Components_Functions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Components_Functions_Order_By>>;
  where?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
};


export type Query_RootMission_Element_Components_Functions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


export type Query_RootPost_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


export type Query_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPost_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};


export type Query_RootPost_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};


export type Query_RootPost_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSensitive_PostArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};


export type Query_RootSensitive_Post_AggregateArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};


export type Query_RootSensitive_Post_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


export type Query_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


export type Query_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTag_CategoryArgs = {
  distinct_on?: Maybe<Array<Tag_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Category_Order_By>>;
  where?: Maybe<Tag_Category_Bool_Exp>;
};


export type Query_RootTag_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Category_Order_By>>;
  where?: Maybe<Tag_Category_Bool_Exp>;
};


export type Query_RootTag_Category_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "sensitive_post" */
export type Sensitive_Post = {
  __typename?: 'sensitive_post';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  group: Group;
  group_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "sensitive_post" */
export type Sensitive_Post_Aggregate = {
  __typename?: 'sensitive_post_aggregate';
  aggregate?: Maybe<Sensitive_Post_Aggregate_Fields>;
  nodes: Array<Sensitive_Post>;
};

/** aggregate fields of "sensitive_post" */
export type Sensitive_Post_Aggregate_Fields = {
  __typename?: 'sensitive_post_aggregate_fields';
  avg?: Maybe<Sensitive_Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sensitive_Post_Max_Fields>;
  min?: Maybe<Sensitive_Post_Min_Fields>;
  stddev?: Maybe<Sensitive_Post_Stddev_Fields>;
  stddev_pop?: Maybe<Sensitive_Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sensitive_Post_Stddev_Samp_Fields>;
  sum?: Maybe<Sensitive_Post_Sum_Fields>;
  var_pop?: Maybe<Sensitive_Post_Var_Pop_Fields>;
  var_samp?: Maybe<Sensitive_Post_Var_Samp_Fields>;
  variance?: Maybe<Sensitive_Post_Variance_Fields>;
};


/** aggregate fields of "sensitive_post" */
export type Sensitive_Post_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sensitive_Post_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sensitive_post" */
export type Sensitive_Post_Aggregate_Order_By = {
  avg?: Maybe<Sensitive_Post_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sensitive_Post_Max_Order_By>;
  min?: Maybe<Sensitive_Post_Min_Order_By>;
  stddev?: Maybe<Sensitive_Post_Stddev_Order_By>;
  stddev_pop?: Maybe<Sensitive_Post_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sensitive_Post_Stddev_Samp_Order_By>;
  sum?: Maybe<Sensitive_Post_Sum_Order_By>;
  var_pop?: Maybe<Sensitive_Post_Var_Pop_Order_By>;
  var_samp?: Maybe<Sensitive_Post_Var_Samp_Order_By>;
  variance?: Maybe<Sensitive_Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sensitive_post" */
export type Sensitive_Post_Arr_Rel_Insert_Input = {
  data: Array<Sensitive_Post_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Sensitive_Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Sensitive_Post_Avg_Fields = {
  __typename?: 'sensitive_post_avg_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "sensitive_post" */
export type Sensitive_Post_Avg_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sensitive_post". All fields are combined with a logical 'AND'. */
export type Sensitive_Post_Bool_Exp = {
  _and?: Maybe<Array<Sensitive_Post_Bool_Exp>>;
  _not?: Maybe<Sensitive_Post_Bool_Exp>;
  _or?: Maybe<Array<Sensitive_Post_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  group?: Maybe<Group_Bool_Exp>;
  group_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sensitive_post" */
export enum Sensitive_Post_Constraint {
  /** unique or primary key constraint */
  SensitivePostPkey = 'sensitive_post_pkey'
}

/** input type for incrementing numeric columns in table "sensitive_post" */
export type Sensitive_Post_Inc_Input = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "sensitive_post" */
export type Sensitive_Post_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Post_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Sensitive_Post_Max_Fields = {
  __typename?: 'sensitive_post_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "sensitive_post" */
export type Sensitive_Post_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sensitive_Post_Min_Fields = {
  __typename?: 'sensitive_post_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "sensitive_post" */
export type Sensitive_Post_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "sensitive_post" */
export type Sensitive_Post_Mutation_Response = {
  __typename?: 'sensitive_post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sensitive_Post>;
};

/** on conflict condition type for table "sensitive_post" */
export type Sensitive_Post_On_Conflict = {
  constraint: Sensitive_Post_Constraint;
  update_columns?: Array<Sensitive_Post_Update_Column>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};

/** Ordering options when selecting data from "sensitive_post". */
export type Sensitive_Post_Order_By = {
  created_at?: Maybe<Order_By>;
  group?: Maybe<Group_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Post_Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: sensitive_post */
export type Sensitive_Post_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "sensitive_post" */
export enum Sensitive_Post_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "sensitive_post" */
export type Sensitive_Post_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Sensitive_Post_Stddev_Fields = {
  __typename?: 'sensitive_post_stddev_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "sensitive_post" */
export type Sensitive_Post_Stddev_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sensitive_Post_Stddev_Pop_Fields = {
  __typename?: 'sensitive_post_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "sensitive_post" */
export type Sensitive_Post_Stddev_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sensitive_Post_Stddev_Samp_Fields = {
  __typename?: 'sensitive_post_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "sensitive_post" */
export type Sensitive_Post_Stddev_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Sensitive_Post_Sum_Fields = {
  __typename?: 'sensitive_post_sum_fields';
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "sensitive_post" */
export type Sensitive_Post_Sum_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "sensitive_post" */
export enum Sensitive_Post_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Sensitive_Post_Var_Pop_Fields = {
  __typename?: 'sensitive_post_var_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "sensitive_post" */
export type Sensitive_Post_Var_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sensitive_Post_Var_Samp_Fields = {
  __typename?: 'sensitive_post_var_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "sensitive_post" */
export type Sensitive_Post_Var_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Sensitive_Post_Variance_Fields = {
  __typename?: 'sensitive_post_variance_fields';
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "sensitive_post" */
export type Sensitive_Post_Variance_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** An array relationship */
  equipment: Array<Equipment>;
  /** An aggregate relationship */
  equipment_aggregate: Equipment_Aggregate;
  /** fetch data from the table: "equipment" using primary key columns */
  equipment_by_pk?: Maybe<Equipment>;
  /** fetch data from the table: "experiment" */
  experiment: Array<Experiment>;
  /** fetch aggregated fields from the table: "experiment" */
  experiment_aggregate: Experiment_Aggregate;
  /** fetch data from the table: "experiment" using primary key columns */
  experiment_by_pk?: Maybe<Experiment>;
  /** fetch data from the table: "experiment_type" */
  experiment_type: Array<Experiment_Type>;
  /** fetch aggregated fields from the table: "experiment_type" */
  experiment_type_aggregate: Experiment_Type_Aggregate;
  /** fetch data from the table: "experiment_type" using primary key columns */
  experiment_type_by_pk?: Maybe<Experiment_Type>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** An array relationship */
  group_xref_users: Array<Group_Xref_Users>;
  /** An aggregate relationship */
  group_xref_users_aggregate: Group_Xref_Users_Aggregate;
  /** fetch data from the table: "group_xref_users" using primary key columns */
  group_xref_users_by_pk?: Maybe<Group_Xref_Users>;
  /** fetch data from the table: "meta_field" */
  meta_field: Array<Meta_Field>;
  /** fetch aggregated fields from the table: "meta_field" */
  meta_field_aggregate: Meta_Field_Aggregate;
  /** fetch data from the table: "meta_field" using primary key columns */
  meta_field_by_pk?: Maybe<Meta_Field>;
  /** fetch data from the table: "meta_key" */
  meta_key: Array<Meta_Key>;
  /** fetch aggregated fields from the table: "meta_key" */
  meta_key_aggregate: Meta_Key_Aggregate;
  /** fetch data from the table: "meta_key" using primary key columns */
  meta_key_by_pk?: Maybe<Meta_Key>;
  /** fetch data from the table: "mission" */
  mission: Array<Mission>;
  /** fetch aggregated fields from the table: "mission" */
  mission_aggregate: Mission_Aggregate;
  /** fetch data from the table: "mission" using primary key columns */
  mission_by_pk?: Maybe<Mission>;
  /** fetch data from the table: "mission_element" */
  mission_element: Array<Mission_Element>;
  /** fetch aggregated fields from the table: "mission_element" */
  mission_element_aggregate: Mission_Element_Aggregate;
  /** fetch data from the table: "mission_element" using primary key columns */
  mission_element_by_pk?: Maybe<Mission_Element>;
  /** An array relationship */
  mission_element_components_functions: Array<Mission_Element_Components_Functions>;
  /** An aggregate relationship */
  mission_element_components_functions_aggregate: Mission_Element_Components_Functions_Aggregate;
  /** fetch data from the table: "mission_element_components_functions" using primary key columns */
  mission_element_components_functions_by_pk?: Maybe<Mission_Element_Components_Functions>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** fetch data from the table: "sensitive_post" */
  sensitive_post: Array<Sensitive_Post>;
  /** fetch aggregated fields from the table: "sensitive_post" */
  sensitive_post_aggregate: Sensitive_Post_Aggregate;
  /** fetch data from the table: "sensitive_post" using primary key columns */
  sensitive_post_by_pk?: Maybe<Sensitive_Post>;
  /** fetch data from the table: "tag" */
  tag: Array<Tag>;
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "tag_category" */
  tag_category: Array<Tag_Category>;
  /** fetch aggregated fields from the table: "tag_category" */
  tag_category_aggregate: Tag_Category_Aggregate;
  /** fetch data from the table: "tag_category" using primary key columns */
  tag_category_by_pk?: Maybe<Tag_Category>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEquipmentArgs = {
  distinct_on?: Maybe<Array<Equipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Equipment_Order_By>>;
  where?: Maybe<Equipment_Bool_Exp>;
};


export type Subscription_RootEquipment_AggregateArgs = {
  distinct_on?: Maybe<Array<Equipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Equipment_Order_By>>;
  where?: Maybe<Equipment_Bool_Exp>;
};


export type Subscription_RootEquipment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootExperimentArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};


export type Subscription_RootExperiment_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};


export type Subscription_RootExperiment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootExperiment_TypeArgs = {
  distinct_on?: Maybe<Array<Experiment_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Type_Order_By>>;
  where?: Maybe<Experiment_Type_Bool_Exp>;
};


export type Subscription_RootExperiment_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiment_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Type_Order_By>>;
  where?: Maybe<Experiment_Type_Bool_Exp>;
};


export type Subscription_RootExperiment_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootFileArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Subscription_RootFile_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Subscription_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGroup_Xref_UsersArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};


export type Subscription_RootGroup_Xref_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Xref_Users_Order_By>>;
  where?: Maybe<Group_Xref_Users_Bool_Exp>;
};


export type Subscription_RootGroup_Xref_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMeta_FieldArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};


export type Subscription_RootMeta_Field_AggregateArgs = {
  distinct_on?: Maybe<Array<Meta_Field_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Field_Order_By>>;
  where?: Maybe<Meta_Field_Bool_Exp>;
};


export type Subscription_RootMeta_Field_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMeta_KeyArgs = {
  distinct_on?: Maybe<Array<Meta_Key_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Key_Order_By>>;
  where?: Maybe<Meta_Key_Bool_Exp>;
};


export type Subscription_RootMeta_Key_AggregateArgs = {
  distinct_on?: Maybe<Array<Meta_Key_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meta_Key_Order_By>>;
  where?: Maybe<Meta_Key_Bool_Exp>;
};


export type Subscription_RootMeta_Key_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMissionArgs = {
  distinct_on?: Maybe<Array<Mission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Order_By>>;
  where?: Maybe<Mission_Bool_Exp>;
};


export type Subscription_RootMission_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Order_By>>;
  where?: Maybe<Mission_Bool_Exp>;
};


export type Subscription_RootMission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMission_ElementArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Order_By>>;
  where?: Maybe<Mission_Element_Bool_Exp>;
};


export type Subscription_RootMission_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Order_By>>;
  where?: Maybe<Mission_Element_Bool_Exp>;
};


export type Subscription_RootMission_Element_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMission_Element_Components_FunctionsArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Components_Functions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Components_Functions_Order_By>>;
  where?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
};


export type Subscription_RootMission_Element_Components_Functions_AggregateArgs = {
  distinct_on?: Maybe<Array<Mission_Element_Components_Functions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mission_Element_Components_Functions_Order_By>>;
  where?: Maybe<Mission_Element_Components_Functions_Bool_Exp>;
};


export type Subscription_RootMission_Element_Components_Functions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPost_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPost_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPost_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSensitive_PostArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};


export type Subscription_RootSensitive_Post_AggregateArgs = {
  distinct_on?: Maybe<Array<Sensitive_Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sensitive_Post_Order_By>>;
  where?: Maybe<Sensitive_Post_Bool_Exp>;
};


export type Subscription_RootSensitive_Post_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTag_CategoryArgs = {
  distinct_on?: Maybe<Array<Tag_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Category_Order_By>>;
  where?: Maybe<Tag_Category_Bool_Exp>;
};


export type Subscription_RootTag_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Category_Order_By>>;
  where?: Maybe<Tag_Category_Bool_Exp>;
};


export type Subscription_RootTag_Category_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: 'tag';
  acronym?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  equipment: Array<Equipment>;
  /** An aggregate relationship */
  equipment_aggregate: Equipment_Aggregate;
  /** An array relationship */
  experiments: Array<Experiment>;
  /** An aggregate relationship */
  experiments_aggregate: Experiment_Aggregate;
  id: Scalars['Int'];
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** An object relationship */
  tag_category: Tag_Category;
  tag_category_id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "tag" */
export type TagEquipmentArgs = {
  distinct_on?: Maybe<Array<Equipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Equipment_Order_By>>;
  where?: Maybe<Equipment_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagEquipment_AggregateArgs = {
  distinct_on?: Maybe<Array<Equipment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Equipment_Order_By>>;
  where?: Maybe<Equipment_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagExperimentsArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagExperiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiment_Order_By>>;
  where?: Maybe<Experiment_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagPost_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};


/** columns and relationships of "tag" */
export type TagPost_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tags_Order_By>>;
  where?: Maybe<Post_Tags_Bool_Exp>;
};

/** aggregated selection of "tag" */
export type Tag_Aggregate = {
  __typename?: 'tag_aggregate';
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "tag" */
export type Tag_Aggregate_Fields = {
  __typename?: 'tag_aggregate_fields';
  avg?: Maybe<Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
  stddev?: Maybe<Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Sum_Fields>;
  var_pop?: Maybe<Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Var_Samp_Fields>;
  variance?: Maybe<Tag_Variance_Fields>;
};


/** aggregate fields of "tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tag" */
export type Tag_Aggregate_Order_By = {
  avg?: Maybe<Tag_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Max_Order_By>;
  min?: Maybe<Tag_Min_Order_By>;
  stddev?: Maybe<Tag_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Sum_Order_By>;
  var_pop?: Maybe<Tag_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tag" */
export type Tag_Arr_Rel_Insert_Input = {
  data: Array<Tag_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Tag_On_Conflict>;
};

/** aggregate avg on columns */
export type Tag_Avg_Fields = {
  __typename?: 'tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
  tag_category_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tag" */
export type Tag_Avg_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Tag_Bool_Exp>>;
  _not?: Maybe<Tag_Bool_Exp>;
  _or?: Maybe<Array<Tag_Bool_Exp>>;
  acronym?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  equipment?: Maybe<Equipment_Bool_Exp>;
  experiments?: Maybe<Experiment_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post_tags?: Maybe<Post_Tags_Bool_Exp>;
  tag_category?: Maybe<Tag_Category_Bool_Exp>;
  tag_category_id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "tag_category" */
export type Tag_Category = {
  __typename?: 'tag_category';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  tags: Array<Tag>;
  /** An aggregate relationship */
  tags_aggregate: Tag_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "tag_category" */
export type Tag_CategoryTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


/** columns and relationships of "tag_category" */
export type Tag_CategoryTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

/** aggregated selection of "tag_category" */
export type Tag_Category_Aggregate = {
  __typename?: 'tag_category_aggregate';
  aggregate?: Maybe<Tag_Category_Aggregate_Fields>;
  nodes: Array<Tag_Category>;
};

/** aggregate fields of "tag_category" */
export type Tag_Category_Aggregate_Fields = {
  __typename?: 'tag_category_aggregate_fields';
  avg?: Maybe<Tag_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tag_Category_Max_Fields>;
  min?: Maybe<Tag_Category_Min_Fields>;
  stddev?: Maybe<Tag_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Category_Sum_Fields>;
  var_pop?: Maybe<Tag_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Category_Var_Samp_Fields>;
  variance?: Maybe<Tag_Category_Variance_Fields>;
};


/** aggregate fields of "tag_category" */
export type Tag_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tag_Category_Avg_Fields = {
  __typename?: 'tag_category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tag_category". All fields are combined with a logical 'AND'. */
export type Tag_Category_Bool_Exp = {
  _and?: Maybe<Array<Tag_Category_Bool_Exp>>;
  _not?: Maybe<Tag_Category_Bool_Exp>;
  _or?: Maybe<Array<Tag_Category_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  tags?: Maybe<Tag_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag_category" */
export enum Tag_Category_Constraint {
  /** unique or primary key constraint */
  TagCategoryPkey = 'tag_category_pkey'
}

/** input type for incrementing numeric columns in table "tag_category" */
export type Tag_Category_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tag_category" */
export type Tag_Category_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  tags?: Maybe<Tag_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tag_Category_Max_Fields = {
  __typename?: 'tag_category_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Tag_Category_Min_Fields = {
  __typename?: 'tag_category_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tag_category" */
export type Tag_Category_Mutation_Response = {
  __typename?: 'tag_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Category>;
};

/** input type for inserting object relation for remote table "tag_category" */
export type Tag_Category_Obj_Rel_Insert_Input = {
  data: Tag_Category_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Category_On_Conflict>;
};

/** on conflict condition type for table "tag_category" */
export type Tag_Category_On_Conflict = {
  constraint: Tag_Category_Constraint;
  update_columns?: Array<Tag_Category_Update_Column>;
  where?: Maybe<Tag_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "tag_category". */
export type Tag_Category_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tags_aggregate?: Maybe<Tag_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: tag_category */
export type Tag_Category_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tag_category" */
export enum Tag_Category_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tag_category" */
export type Tag_Category_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tag_Category_Stddev_Fields = {
  __typename?: 'tag_category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tag_Category_Stddev_Pop_Fields = {
  __typename?: 'tag_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tag_Category_Stddev_Samp_Fields = {
  __typename?: 'tag_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tag_Category_Sum_Fields = {
  __typename?: 'tag_category_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tag_category" */
export enum Tag_Category_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tag_Category_Var_Pop_Fields = {
  __typename?: 'tag_category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tag_Category_Var_Samp_Fields = {
  __typename?: 'tag_category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tag_Category_Variance_Fields = {
  __typename?: 'tag_category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** unique or primary key constraints on table "tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint */
  TagPkey = 'tag_pkey'
}

/** input type for incrementing numeric columns in table "tag" */
export type Tag_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  tag_category_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tag" */
export type Tag_Insert_Input = {
  acronym?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  equipment?: Maybe<Equipment_Arr_Rel_Insert_Input>;
  experiments?: Maybe<Experiment_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  post_tags?: Maybe<Post_Tags_Arr_Rel_Insert_Input>;
  tag_category?: Maybe<Tag_Category_Obj_Rel_Insert_Input>;
  tag_category_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: 'tag_max_fields';
  acronym?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_category_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tag" */
export type Tag_Max_Order_By = {
  acronym?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: 'tag_min_fields';
  acronym?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_category_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tag" */
export type Tag_Min_Order_By = {
  acronym?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "tag" */
export type Tag_Mutation_Response = {
  __typename?: 'tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tag>;
};

/** input type for inserting object relation for remote table "tag" */
export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tag_On_Conflict>;
};

/** on conflict condition type for table "tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint;
  update_columns?: Array<Tag_Update_Column>;
  where?: Maybe<Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "tag". */
export type Tag_Order_By = {
  acronym?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  equipment_aggregate?: Maybe<Equipment_Aggregate_Order_By>;
  experiments_aggregate?: Maybe<Experiment_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  post_tags_aggregate?: Maybe<Post_Tags_Aggregate_Order_By>;
  tag_category?: Maybe<Tag_Category_Order_By>;
  tag_category_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: tag */
export type Tag_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tag" */
export enum Tag_Select_Column {
  /** column name */
  Acronym = 'acronym',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TagCategoryId = 'tag_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tag" */
export type Tag_Set_Input = {
  acronym?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tag_category_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tag_Stddev_Fields = {
  __typename?: 'tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  tag_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tag" */
export type Tag_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Stddev_Pop_Fields = {
  __typename?: 'tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tag" */
export type Tag_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Stddev_Samp_Fields = {
  __typename?: 'tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tag" */
export type Tag_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tag_Sum_Fields = {
  __typename?: 'tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
  tag_category_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tag" */
export type Tag_Sum_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** update columns of table "tag" */
export enum Tag_Update_Column {
  /** column name */
  Acronym = 'acronym',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  TagCategoryId = 'tag_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tag_Var_Pop_Fields = {
  __typename?: 'tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  tag_category_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tag" */
export type Tag_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Var_Samp_Fields = {
  __typename?: 'tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  tag_category_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tag" */
export type Tag_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Variance_Fields = {
  __typename?: 'tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
  tag_category_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tag" */
export type Tag_Variance_Order_By = {
  id?: Maybe<Order_By>;
  tag_category_id?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type LoginMutationVariables = Exact<{
  args: LoginArgs;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: Maybe<{ __typename?: 'LoginResult', token: string }> };

export type RegisterMutationVariables = Exact<{
  args: RegisterArgs;
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register?: Maybe<{ __typename?: 'RegisterResult', token: string }> };

export type FileFragmentFragment = { __typename?: 'file', created_at: any, filename: string, filesize: number, id: any, mimetype: string, updated_at: any, uploaded_by: number };

export type FilesStreamSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type FilesStreamSubscription = { __typename?: 'subscription_root', file: Array<{ __typename?: 'file', created_at: any, filename: string, filesize: number, id: any, mimetype: string, updated_at: any, uploaded_by: number }> };

export type UserFieldsFragment = { __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string };

export type UsersQueryVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersQuery = { __typename?: 'query_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export type UsersStreamSubscriptionVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersStreamSubscription = { __typename?: 'subscription_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export const FileFragmentFragmentDoc = gql`
    fragment fileFragment on file {
  created_at
  filename
  filesize
  id
  mimetype
  updated_at
  uploaded_by
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on auth_users {
  id
  first_name
  last_name
  email
}
    `;
export const LoginDocument = gql`
    mutation Login($args: LoginArgs!) {
  login(args: $args) {
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($args: RegisterArgs!) {
  register(args: $args) {
    token
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const FilesStreamDocument = gql`
    subscription FilesStream {
  file {
    ...fileFragment
  }
}
    ${FileFragmentFragmentDoc}`;

export function useFilesStreamSubscription<R = FilesStreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, FilesStreamSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<FilesStreamSubscription, R>) {
  return Urql.useSubscription<FilesStreamSubscription, R, FilesStreamSubscriptionVariables>({ query: FilesStreamDocument, ...options }, handler);
};
export const UsersDocument = gql`
    query Users($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<never, UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};
export const UsersStreamDocument = gql`
    subscription UsersStream($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersStreamSubscription<R = UsersStreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, UsersStreamSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<UsersStreamSubscription, R>) {
  return Urql.useSubscription<UsersStreamSubscription, R, UsersStreamSubscriptionVariables>({ query: UsersStreamDocument, ...options }, handler);
};