import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};

export type AddConversationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  messages?: InputMaybe<Array<InputMaybe<MessageRef>>>;
  users?: InputMaybe<Array<InputMaybe<UserRef>>>;
};

export type AddConversationPayload = {
  __typename?: 'AddConversationPayload';
  conversation?: Maybe<Array<Maybe<Conversation>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddConversationPayloadConversationArgs = {
  filter?: InputMaybe<ConversationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ConversationOrder>;
};

export type AddGameInput = {
  name: Scalars['String'];
};

export type AddGamePayload = {
  __typename?: 'AddGamePayload';
  game?: Maybe<Array<Maybe<Game>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddGamePayloadGameArgs = {
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
};

export type AddMessageInput = {
  content: Scalars['String'];
  conversation?: InputMaybe<ConversationRef>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type AddMessagePayload = {
  __typename?: 'AddMessagePayload';
  message?: Maybe<Array<Maybe<Message>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddMessagePayloadMessageArgs = {
  filter?: InputMaybe<MessageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MessageOrder>;
};

export type AddUserInput = {
  conversations?: InputMaybe<Array<InputMaybe<ConversationRef>>>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  username: Scalars['String'];
  zipCode?: InputMaybe<Scalars['String']>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type AddUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type Conversation = {
  __typename?: 'Conversation';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  messages?: Maybe<Array<Maybe<Message>>>;
  messagesAggregate?: Maybe<MessageAggregateResult>;
  users?: Maybe<Array<Maybe<User>>>;
  usersAggregate?: Maybe<UserAggregateResult>;
};


export type ConversationMessagesArgs = {
  filter?: InputMaybe<MessageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MessageOrder>;
};


export type ConversationMessagesAggregateArgs = {
  filter?: InputMaybe<MessageFilter>;
};


export type ConversationUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};


export type ConversationUsersAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type ConversationAggregateResult = {
  __typename?: 'ConversationAggregateResult';
  count?: Maybe<Scalars['Int']>;
  createdAtMax?: Maybe<Scalars['DateTime']>;
  createdAtMin?: Maybe<Scalars['DateTime']>;
};

export type ConversationFilter = {
  and?: InputMaybe<Array<InputMaybe<ConversationFilter>>>;
  has?: InputMaybe<Array<InputMaybe<ConversationHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<ConversationFilter>;
  or?: InputMaybe<Array<InputMaybe<ConversationFilter>>>;
};

export enum ConversationHasFilter {
  CreatedAt = 'createdAt',
  Messages = 'messages',
  Users = 'users'
}

export type ConversationOrder = {
  asc?: InputMaybe<ConversationOrderable>;
  desc?: InputMaybe<ConversationOrderable>;
  then?: InputMaybe<ConversationOrder>;
};

export enum ConversationOrderable {
  CreatedAt = 'createdAt'
}

export type ConversationPatch = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  messages?: InputMaybe<Array<InputMaybe<MessageRef>>>;
  users?: InputMaybe<Array<InputMaybe<UserRef>>>;
};

export type ConversationRef = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  messages?: InputMaybe<Array<InputMaybe<MessageRef>>>;
  users?: InputMaybe<Array<InputMaybe<UserRef>>>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']>>;
  graphql?: InputMaybe<Scalars['String']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
  ge?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  le?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteConversationPayload = {
  __typename?: 'DeleteConversationPayload';
  conversation?: Maybe<Array<Maybe<Conversation>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteConversationPayloadConversationArgs = {
  filter?: InputMaybe<ConversationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ConversationOrder>;
};

export type DeleteGamePayload = {
  __typename?: 'DeleteGamePayload';
  game?: Maybe<Array<Maybe<Game>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteGamePayloadGameArgs = {
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
};

export type DeleteMessagePayload = {
  __typename?: 'DeleteMessagePayload';
  message?: Maybe<Array<Maybe<Message>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteMessagePayloadMessageArgs = {
  filter?: InputMaybe<MessageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MessageOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GameAggregateResult = {
  __typename?: 'GameAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type GameFilter = {
  and?: InputMaybe<Array<InputMaybe<GameFilter>>>;
  has?: InputMaybe<Array<InputMaybe<GameHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<GameFilter>;
  or?: InputMaybe<Array<InputMaybe<GameFilter>>>;
};

export enum GameHasFilter {
  Name = 'name'
}

export type GameOrder = {
  asc?: InputMaybe<GameOrderable>;
  desc?: InputMaybe<GameOrderable>;
  then?: InputMaybe<GameOrder>;
};

export enum GameOrderable {
  Name = 'name'
}

export type GamePatch = {
  name?: InputMaybe<Scalars['String']>;
};

export type GameRef = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']>;
  ge?: InputMaybe<Scalars['Int64']>;
  gt?: InputMaybe<Scalars['Int64']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']>>>;
  le?: InputMaybe<Scalars['Int64']>;
  lt?: InputMaybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  conversation?: Maybe<Conversation>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
};


export type MessageConversationArgs = {
  filter?: InputMaybe<ConversationFilter>;
};

export type MessageAggregateResult = {
  __typename?: 'MessageAggregateResult';
  contentMax?: Maybe<Scalars['String']>;
  contentMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  createdAtMax?: Maybe<Scalars['DateTime']>;
  createdAtMin?: Maybe<Scalars['DateTime']>;
};

export type MessageFilter = {
  and?: InputMaybe<Array<InputMaybe<MessageFilter>>>;
  has?: InputMaybe<Array<InputMaybe<MessageHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<MessageFilter>;
  or?: InputMaybe<Array<InputMaybe<MessageFilter>>>;
};

export enum MessageHasFilter {
  Content = 'content',
  Conversation = 'conversation',
  CreatedAt = 'createdAt'
}

export type MessageOrder = {
  asc?: InputMaybe<MessageOrderable>;
  desc?: InputMaybe<MessageOrderable>;
  then?: InputMaybe<MessageOrder>;
};

export enum MessageOrderable {
  Content = 'content',
  CreatedAt = 'createdAt'
}

export type MessagePatch = {
  content?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<ConversationRef>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageRef = {
  content?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<ConversationRef>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addConversation?: Maybe<AddConversationPayload>;
  addGame?: Maybe<AddGamePayload>;
  addMessage?: Maybe<AddMessagePayload>;
  addUser?: Maybe<AddUserPayload>;
  deleteConversation?: Maybe<DeleteConversationPayload>;
  deleteGame?: Maybe<DeleteGamePayload>;
  deleteMessage?: Maybe<DeleteMessagePayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  updateConversation?: Maybe<UpdateConversationPayload>;
  updateGame?: Maybe<UpdateGamePayload>;
  updateMessage?: Maybe<UpdateMessagePayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAddConversationArgs = {
  input: Array<AddConversationInput>;
};


export type MutationAddGameArgs = {
  input: Array<AddGameInput>;
};


export type MutationAddMessageArgs = {
  input: Array<AddMessageInput>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationDeleteConversationArgs = {
  filter: ConversationFilter;
};


export type MutationDeleteGameArgs = {
  filter: GameFilter;
};


export type MutationDeleteMessageArgs = {
  filter: MessageFilter;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationUpdateConversationArgs = {
  input: UpdateConversationInput;
};


export type MutationUpdateGameArgs = {
  input: UpdateGameInput;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Query = {
  __typename?: 'Query';
  aggregateConversation?: Maybe<ConversationAggregateResult>;
  aggregateGame?: Maybe<GameAggregateResult>;
  aggregateMessage?: Maybe<MessageAggregateResult>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getConversation?: Maybe<Conversation>;
  getGame?: Maybe<Game>;
  getMessage?: Maybe<Message>;
  getUser?: Maybe<User>;
  queryConversation?: Maybe<Array<Maybe<Conversation>>>;
  queryGame?: Maybe<Array<Maybe<Game>>>;
  queryMessage?: Maybe<Array<Maybe<Message>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryAggregateConversationArgs = {
  filter?: InputMaybe<ConversationFilter>;
};


export type QueryAggregateGameArgs = {
  filter?: InputMaybe<GameFilter>;
};


export type QueryAggregateMessageArgs = {
  filter?: InputMaybe<MessageFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type QueryGetConversationArgs = {
  id: Scalars['ID'];
};


export type QueryGetGameArgs = {
  id: Scalars['ID'];
};


export type QueryGetMessageArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryQueryConversationArgs = {
  filter?: InputMaybe<ConversationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ConversationOrder>;
};


export type QueryQueryGameArgs = {
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
};


export type QueryQueryMessageArgs = {
  filter?: InputMaybe<MessageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MessageOrder>;
};


export type QueryQueryUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']>;
  anyoftext?: InputMaybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']>;
  anyofterms?: InputMaybe<Scalars['String']>;
};

export type UpdateConversationInput = {
  filter: ConversationFilter;
  remove?: InputMaybe<ConversationPatch>;
  set?: InputMaybe<ConversationPatch>;
};

export type UpdateConversationPayload = {
  __typename?: 'UpdateConversationPayload';
  conversation?: Maybe<Array<Maybe<Conversation>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateConversationPayloadConversationArgs = {
  filter?: InputMaybe<ConversationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ConversationOrder>;
};

export type UpdateGameInput = {
  filter: GameFilter;
  remove?: InputMaybe<GamePatch>;
  set?: InputMaybe<GamePatch>;
};

export type UpdateGamePayload = {
  __typename?: 'UpdateGamePayload';
  game?: Maybe<Array<Maybe<Game>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateGamePayloadGameArgs = {
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
};

export type UpdateMessageInput = {
  filter: MessageFilter;
  remove?: InputMaybe<MessagePatch>;
  set?: InputMaybe<MessagePatch>;
};

export type UpdateMessagePayload = {
  __typename?: 'UpdateMessagePayload';
  message?: Maybe<Array<Maybe<Message>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateMessagePayloadMessageArgs = {
  filter?: InputMaybe<MessageFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MessageOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: InputMaybe<UserPatch>;
  set?: InputMaybe<UserPatch>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<UserOrder>;
};

export type User = {
  __typename?: 'User';
  conversations?: Maybe<Array<Maybe<Conversation>>>;
  conversationsAggregate?: Maybe<ConversationAggregateResult>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  username: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};


export type UserConversationsArgs = {
  filter?: InputMaybe<ConversationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ConversationOrder>;
};


export type UserConversationsAggregateArgs = {
  filter?: InputMaybe<ConversationFilter>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']>;
  latitudeAvg?: Maybe<Scalars['Float']>;
  latitudeMax?: Maybe<Scalars['Float']>;
  latitudeMin?: Maybe<Scalars['Float']>;
  latitudeSum?: Maybe<Scalars['Float']>;
  longitudeAvg?: Maybe<Scalars['Float']>;
  longitudeMax?: Maybe<Scalars['Float']>;
  longitudeMin?: Maybe<Scalars['Float']>;
  longitudeSum?: Maybe<Scalars['Float']>;
  usernameMax?: Maybe<Scalars['String']>;
  usernameMin?: Maybe<Scalars['String']>;
  zipCodeMax?: Maybe<Scalars['String']>;
  zipCodeMin?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  has?: InputMaybe<Array<InputMaybe<UserHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<Array<InputMaybe<UserFilter>>>;
};

export enum UserHasFilter {
  Conversations = 'conversations',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Username = 'username',
  ZipCode = 'zipCode'
}

export type UserOrder = {
  asc?: InputMaybe<UserOrderable>;
  desc?: InputMaybe<UserOrderable>;
  then?: InputMaybe<UserOrder>;
};

export enum UserOrderable {
  Latitude = 'latitude',
  Longitude = 'longitude',
  Username = 'username',
  ZipCode = 'zipCode'
}

export type UserPatch = {
  conversations?: InputMaybe<Array<InputMaybe<ConversationRef>>>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  username?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UserRef = {
  conversations?: InputMaybe<Array<InputMaybe<ConversationRef>>>;
  id?: InputMaybe<Scalars['ID']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  username?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type ConversationFragmentFragment = { __typename?: 'Conversation', id: string, createdAt?: any | null };

export type ConversationDataFragment = { __typename?: 'Conversation', id: string, createdAt?: any | null, messages?: Array<{ __typename?: 'Message', id: string, createdAt?: any | null, content: string } | null> | null, users?: Array<{ __typename?: 'User', id: string, username: string, zipCode?: string | null, latitude?: number | null, longitude?: number | null } | null> | null };

export type GameFragmentFragment = { __typename?: 'Game', id: string, name: string };

export type GameDataFragment = { __typename?: 'Game', id: string, name: string };

export type AllGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGamesQuery = { __typename?: 'Query', queryGame?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null };

export type GetGameQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetGameQuery = { __typename?: 'Query', getGame?: { __typename?: 'Game', id: string, name: string } | null };

export type AddGameMutationVariables = Exact<{
  game: AddGameInput;
}>;


export type AddGameMutation = { __typename?: 'Mutation', addGame?: { __typename?: 'AddGamePayload', game?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null } | null };

export type UpdateGameMutationVariables = Exact<{
  patch: UpdateGameInput;
}>;


export type UpdateGameMutation = { __typename?: 'Mutation', updateGame?: { __typename?: 'UpdateGamePayload', game?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null } | null };

export type MessageFragmentFragment = { __typename?: 'Message', id: string, createdAt?: any | null, content: string };

export type MessageDataFragment = { __typename?: 'Message', id: string, createdAt?: any | null, content: string, conversation?: { __typename?: 'Conversation', id: string, createdAt?: any | null } | null };

export type UserFragmentFragment = { __typename?: 'User', id: string, username: string, zipCode?: string | null, latitude?: number | null, longitude?: number | null };

export type UserDataFragment = { __typename?: 'User', id: string, username: string, zipCode?: string | null, latitude?: number | null, longitude?: number | null, conversations?: Array<{ __typename?: 'Conversation', id: string, createdAt?: any | null } | null> | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', queryUser?: Array<{ __typename?: 'User', id: string, username: string, zipCode?: string | null, latitude?: number | null, longitude?: number | null, conversations?: Array<{ __typename?: 'Conversation', id: string, createdAt?: any | null } | null> | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, username: string, zipCode?: string | null, latitude?: number | null, longitude?: number | null, conversations?: Array<{ __typename?: 'Conversation', id: string, createdAt?: any | null } | null> | null } | null };

export type AddUserMutationVariables = Exact<{
  user: AddUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'AddUserPayload', user?: Array<{ __typename?: 'User', id: string, username: string, zipCode?: string | null, latitude?: number | null, longitude?: number | null, conversations?: Array<{ __typename?: 'Conversation', id: string, createdAt?: any | null } | null> | null } | null> | null } | null };

export type UpdateUserMutationVariables = Exact<{
  patch: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUserPayload', user?: Array<{ __typename?: 'User', id: string, username: string, zipCode?: string | null, latitude?: number | null, longitude?: number | null, conversations?: Array<{ __typename?: 'Conversation', id: string, createdAt?: any | null } | null> | null } | null> | null } | null };

export const ConversationFragmentFragmentDoc = gql`
    fragment conversationFragment on Conversation {
  id
  createdAt
}
    `;
export const MessageFragmentFragmentDoc = gql`
    fragment messageFragment on Message {
  id
  createdAt
  content
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment userFragment on User {
  id
  username
  zipCode
  latitude
  longitude
}
    `;
export const ConversationDataFragmentDoc = gql`
    fragment conversationData on Conversation {
  ...conversationFragment
  messages {
    ...messageFragment
  }
  users {
    ...userFragment
  }
}
    ${ConversationFragmentFragmentDoc}
${MessageFragmentFragmentDoc}
${UserFragmentFragmentDoc}`;
export const GameFragmentFragmentDoc = gql`
    fragment gameFragment on Game {
  id
  name
}
    `;
export const GameDataFragmentDoc = gql`
    fragment gameData on Game {
  ...gameFragment
}
    ${GameFragmentFragmentDoc}`;
export const MessageDataFragmentDoc = gql`
    fragment messageData on Message {
  ...messageFragment
  conversation {
    ...conversationFragment
  }
}
    ${MessageFragmentFragmentDoc}
${ConversationFragmentFragmentDoc}`;
export const UserDataFragmentDoc = gql`
    fragment userData on User {
  ...userFragment
  conversations {
    ...conversationFragment
  }
}
    ${UserFragmentFragmentDoc}
${ConversationFragmentFragmentDoc}`;
export const AllGamesDocument = gql`
    query allGames {
  queryGame {
    ...gameData
  }
}
    ${GameDataFragmentDoc}`;

/**
 * __useAllGamesQuery__
 *
 * To run a query within a React component, call `useAllGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllGamesQuery(baseOptions?: Apollo.QueryHookOptions<AllGamesQuery, AllGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGamesQuery, AllGamesQueryVariables>(AllGamesDocument, options);
      }
export function useAllGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGamesQuery, AllGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGamesQuery, AllGamesQueryVariables>(AllGamesDocument, options);
        }
export type AllGamesQueryHookResult = ReturnType<typeof useAllGamesQuery>;
export type AllGamesLazyQueryHookResult = ReturnType<typeof useAllGamesLazyQuery>;
export type AllGamesQueryResult = Apollo.QueryResult<AllGamesQuery, AllGamesQueryVariables>;
export const GetGameDocument = gql`
    query getGame($id: ID!) {
  getGame(id: $id) {
    ...gameData
  }
}
    ${GameDataFragmentDoc}`;

/**
 * __useGetGameQuery__
 *
 * To run a query within a React component, call `useGetGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGameQuery(baseOptions: Apollo.QueryHookOptions<GetGameQuery, GetGameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGameQuery, GetGameQueryVariables>(GetGameDocument, options);
      }
export function useGetGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGameQuery, GetGameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGameQuery, GetGameQueryVariables>(GetGameDocument, options);
        }
export type GetGameQueryHookResult = ReturnType<typeof useGetGameQuery>;
export type GetGameLazyQueryHookResult = ReturnType<typeof useGetGameLazyQuery>;
export type GetGameQueryResult = Apollo.QueryResult<GetGameQuery, GetGameQueryVariables>;
export const AddGameDocument = gql`
    mutation addGame($game: AddGameInput!) {
  addGame(input: [$game]) {
    game {
      ...gameData
    }
  }
}
    ${GameDataFragmentDoc}`;
export type AddGameMutationFn = Apollo.MutationFunction<AddGameMutation, AddGameMutationVariables>;

/**
 * __useAddGameMutation__
 *
 * To run a mutation, you first call `useAddGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGameMutation, { data, loading, error }] = useAddGameMutation({
 *   variables: {
 *      game: // value for 'game'
 *   },
 * });
 */
export function useAddGameMutation(baseOptions?: Apollo.MutationHookOptions<AddGameMutation, AddGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGameMutation, AddGameMutationVariables>(AddGameDocument, options);
      }
export type AddGameMutationHookResult = ReturnType<typeof useAddGameMutation>;
export type AddGameMutationResult = Apollo.MutationResult<AddGameMutation>;
export type AddGameMutationOptions = Apollo.BaseMutationOptions<AddGameMutation, AddGameMutationVariables>;
export const UpdateGameDocument = gql`
    mutation updateGame($patch: UpdateGameInput!) {
  updateGame(input: $patch) {
    game {
      ...gameData
    }
  }
}
    ${GameDataFragmentDoc}`;
export type UpdateGameMutationFn = Apollo.MutationFunction<UpdateGameMutation, UpdateGameMutationVariables>;

/**
 * __useUpdateGameMutation__
 *
 * To run a mutation, you first call `useUpdateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameMutation, { data, loading, error }] = useUpdateGameMutation({
 *   variables: {
 *      patch: // value for 'patch'
 *   },
 * });
 */
export function useUpdateGameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGameMutation, UpdateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGameMutation, UpdateGameMutationVariables>(UpdateGameDocument, options);
      }
export type UpdateGameMutationHookResult = ReturnType<typeof useUpdateGameMutation>;
export type UpdateGameMutationResult = Apollo.MutationResult<UpdateGameMutation>;
export type UpdateGameMutationOptions = Apollo.BaseMutationOptions<UpdateGameMutation, UpdateGameMutationVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  queryUser {
    ...userData
  }
}
    ${UserDataFragmentDoc}`;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  getUser(id: $id) {
    ...userData
  }
}
    ${UserDataFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const AddUserDocument = gql`
    mutation addUser($user: AddUserInput!) {
  addUser(input: [$user]) {
    user {
      ...userData
    }
  }
}
    ${UserDataFragmentDoc}`;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($patch: UpdateUserInput!) {
  updateUser(input: $patch) {
    user {
      ...userData
    }
  }
}
    ${UserDataFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      patch: // value for 'patch'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;