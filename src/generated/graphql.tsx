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

export type AddAwardInput = {
  event: EventRef;
  name: Scalars['String'];
};

export type AddAwardPayload = {
  __typename?: 'AddAwardPayload';
  award?: Maybe<Array<Maybe<Award>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddAwardPayloadAwardArgs = {
  filter?: InputMaybe<AwardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AwardOrder>;
};

export type AddCompanyInput = {
  name: Scalars['String'];
};

export type AddCompanyPayload = {
  __typename?: 'AddCompanyPayload';
  company?: Maybe<Array<Maybe<Company>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCompanyPayloadCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};

export type AddEventInput = {
  awards?: InputMaybe<Array<InputMaybe<AwardRef>>>;
  festival: FestivalRef;
  year: Scalars['Int'];
};

export type AddEventPayload = {
  __typename?: 'AddEventPayload';
  event?: Maybe<Array<Maybe<Event>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddEventPayloadEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<EventOrder>;
};

export type AddFestivalInput = {
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  name: Scalars['String'];
};

export type AddFestivalPayload = {
  __typename?: 'AddFestivalPayload';
  festival?: Maybe<Array<Maybe<Festival>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddFestivalPayloadFestivalArgs = {
  filter?: InputMaybe<FestivalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FestivalOrder>;
};

export type AddGameInput = {
  authors?: InputMaybe<Array<InputMaybe<PeopleRef>>>;
  illustrators?: InputMaybe<Array<InputMaybe<PeopleRef>>>;
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

export type AddPeopleInput = {
  firstName: Scalars['String'];
  gameAuthor?: InputMaybe<Array<InputMaybe<GameRef>>>;
  gameIllustrator?: InputMaybe<Array<InputMaybe<GameRef>>>;
  lastName: Scalars['String'];
};

export type AddPeoplePayload = {
  __typename?: 'AddPeoplePayload';
  numUids?: Maybe<Scalars['Int']>;
  people?: Maybe<Array<Maybe<People>>>;
};


export type AddPeoplePayloadPeopleArgs = {
  filter?: InputMaybe<PeopleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PeopleOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']>;
};

export type Award = {
  __typename?: 'Award';
  event: Event;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type AwardEventArgs = {
  filter?: InputMaybe<EventFilter>;
};

export type AwardAggregateResult = {
  __typename?: 'AwardAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type AwardFilter = {
  and?: InputMaybe<Array<InputMaybe<AwardFilter>>>;
  has?: InputMaybe<Array<InputMaybe<AwardHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<AwardFilter>;
  or?: InputMaybe<Array<InputMaybe<AwardFilter>>>;
};

export enum AwardHasFilter {
  Event = 'event',
  Name = 'name'
}

export type AwardOrder = {
  asc?: InputMaybe<AwardOrderable>;
  desc?: InputMaybe<AwardOrderable>;
  then?: InputMaybe<AwardOrder>;
};

export enum AwardOrderable {
  Name = 'name'
}

export type AwardPatch = {
  event?: InputMaybe<EventRef>;
  name?: InputMaybe<Scalars['String']>;
};

export type AwardRef = {
  event?: InputMaybe<EventRef>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CompanyAggregateResult = {
  __typename?: 'CompanyAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type CompanyFilter = {
  and?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
  has?: InputMaybe<Array<InputMaybe<CompanyHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<CompanyFilter>;
  or?: InputMaybe<Array<InputMaybe<CompanyFilter>>>;
};

export enum CompanyHasFilter {
  Name = 'name'
}

export type CompanyOrder = {
  asc?: InputMaybe<CompanyOrderable>;
  desc?: InputMaybe<CompanyOrderable>;
  then?: InputMaybe<CompanyOrder>;
};

export enum CompanyOrderable {
  Name = 'name'
}

export type CompanyPatch = {
  name?: InputMaybe<Scalars['String']>;
};

export type CompanyRef = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
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

export type DeleteAwardPayload = {
  __typename?: 'DeleteAwardPayload';
  award?: Maybe<Array<Maybe<Award>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteAwardPayloadAwardArgs = {
  filter?: InputMaybe<AwardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AwardOrder>;
};

export type DeleteCompanyPayload = {
  __typename?: 'DeleteCompanyPayload';
  company?: Maybe<Array<Maybe<Company>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCompanyPayloadCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};

export type DeleteEventPayload = {
  __typename?: 'DeleteEventPayload';
  event?: Maybe<Array<Maybe<Event>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteEventPayloadEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<EventOrder>;
};

export type DeleteFestivalPayload = {
  __typename?: 'DeleteFestivalPayload';
  festival?: Maybe<Array<Maybe<Festival>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteFestivalPayloadFestivalArgs = {
  filter?: InputMaybe<FestivalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FestivalOrder>;
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

export type DeletePeoplePayload = {
  __typename?: 'DeletePeoplePayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  people?: Maybe<Array<Maybe<People>>>;
};


export type DeletePeoplePayloadPeopleArgs = {
  filter?: InputMaybe<PeopleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PeopleOrder>;
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

export type Event = {
  __typename?: 'Event';
  awards?: Maybe<Array<Maybe<Award>>>;
  awardsAggregate?: Maybe<AwardAggregateResult>;
  festival: Festival;
  id: Scalars['ID'];
  year: Scalars['Int'];
};


export type EventAwardsArgs = {
  filter?: InputMaybe<AwardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AwardOrder>;
};


export type EventAwardsAggregateArgs = {
  filter?: InputMaybe<AwardFilter>;
};


export type EventFestivalArgs = {
  filter?: InputMaybe<FestivalFilter>;
};

export type EventAggregateResult = {
  __typename?: 'EventAggregateResult';
  count?: Maybe<Scalars['Int']>;
  yearAvg?: Maybe<Scalars['Float']>;
  yearMax?: Maybe<Scalars['Int']>;
  yearMin?: Maybe<Scalars['Int']>;
  yearSum?: Maybe<Scalars['Int']>;
};

export type EventFilter = {
  and?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  has?: InputMaybe<Array<InputMaybe<EventHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<EventFilter>;
  or?: InputMaybe<Array<InputMaybe<EventFilter>>>;
};

export enum EventHasFilter {
  Awards = 'awards',
  Festival = 'festival',
  Year = 'year'
}

export type EventOrder = {
  asc?: InputMaybe<EventOrderable>;
  desc?: InputMaybe<EventOrderable>;
  then?: InputMaybe<EventOrder>;
};

export enum EventOrderable {
  Year = 'year'
}

export type EventPatch = {
  awards?: InputMaybe<Array<InputMaybe<AwardRef>>>;
  festival?: InputMaybe<FestivalRef>;
  year?: InputMaybe<Scalars['Int']>;
};

export type EventRef = {
  awards?: InputMaybe<Array<InputMaybe<AwardRef>>>;
  festival?: InputMaybe<FestivalRef>;
  id?: InputMaybe<Scalars['ID']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Festival = {
  __typename?: 'Festival';
  events?: Maybe<Array<Maybe<Event>>>;
  eventsAggregate?: Maybe<EventAggregateResult>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type FestivalEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<EventOrder>;
};


export type FestivalEventsAggregateArgs = {
  filter?: InputMaybe<EventFilter>;
};

export type FestivalAggregateResult = {
  __typename?: 'FestivalAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type FestivalFilter = {
  and?: InputMaybe<Array<InputMaybe<FestivalFilter>>>;
  has?: InputMaybe<Array<InputMaybe<FestivalHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<FestivalFilter>;
  or?: InputMaybe<Array<InputMaybe<FestivalFilter>>>;
};

export enum FestivalHasFilter {
  Events = 'events',
  Name = 'name'
}

export type FestivalOrder = {
  asc?: InputMaybe<FestivalOrderable>;
  desc?: InputMaybe<FestivalOrderable>;
  then?: InputMaybe<FestivalOrder>;
};

export enum FestivalOrderable {
  Name = 'name'
}

export type FestivalPatch = {
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FestivalRef = {
  events?: InputMaybe<Array<InputMaybe<EventRef>>>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

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
  authors?: Maybe<Array<Maybe<People>>>;
  authorsAggregate?: Maybe<PeopleAggregateResult>;
  id: Scalars['ID'];
  illustrators?: Maybe<Array<Maybe<People>>>;
  illustratorsAggregate?: Maybe<PeopleAggregateResult>;
  name: Scalars['String'];
};


export type GameAuthorsArgs = {
  filter?: InputMaybe<PeopleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PeopleOrder>;
};


export type GameAuthorsAggregateArgs = {
  filter?: InputMaybe<PeopleFilter>;
};


export type GameIllustratorsArgs = {
  filter?: InputMaybe<PeopleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PeopleOrder>;
};


export type GameIllustratorsAggregateArgs = {
  filter?: InputMaybe<PeopleFilter>;
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
  Authors = 'authors',
  Illustrators = 'illustrators',
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
  authors?: InputMaybe<Array<InputMaybe<PeopleRef>>>;
  illustrators?: InputMaybe<Array<InputMaybe<PeopleRef>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type GameRef = {
  authors?: InputMaybe<Array<InputMaybe<PeopleRef>>>;
  id?: InputMaybe<Scalars['ID']>;
  illustrators?: InputMaybe<Array<InputMaybe<PeopleRef>>>;
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
  addAward?: Maybe<AddAwardPayload>;
  addCompany?: Maybe<AddCompanyPayload>;
  addEvent?: Maybe<AddEventPayload>;
  addFestival?: Maybe<AddFestivalPayload>;
  addGame?: Maybe<AddGamePayload>;
  addPeople?: Maybe<AddPeoplePayload>;
  deleteAward?: Maybe<DeleteAwardPayload>;
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  deleteEvent?: Maybe<DeleteEventPayload>;
  deleteFestival?: Maybe<DeleteFestivalPayload>;
  deleteGame?: Maybe<DeleteGamePayload>;
  deletePeople?: Maybe<DeletePeoplePayload>;
  updateAward?: Maybe<UpdateAwardPayload>;
  updateCompany?: Maybe<UpdateCompanyPayload>;
  updateEvent?: Maybe<UpdateEventPayload>;
  updateFestival?: Maybe<UpdateFestivalPayload>;
  updateGame?: Maybe<UpdateGamePayload>;
  updatePeople?: Maybe<UpdatePeoplePayload>;
};


export type MutationAddAwardArgs = {
  input: Array<AddAwardInput>;
};


export type MutationAddCompanyArgs = {
  input: Array<AddCompanyInput>;
};


export type MutationAddEventArgs = {
  input: Array<AddEventInput>;
};


export type MutationAddFestivalArgs = {
  input: Array<AddFestivalInput>;
};


export type MutationAddGameArgs = {
  input: Array<AddGameInput>;
};


export type MutationAddPeopleArgs = {
  input: Array<AddPeopleInput>;
};


export type MutationDeleteAwardArgs = {
  filter: AwardFilter;
};


export type MutationDeleteCompanyArgs = {
  filter: CompanyFilter;
};


export type MutationDeleteEventArgs = {
  filter: EventFilter;
};


export type MutationDeleteFestivalArgs = {
  filter: FestivalFilter;
};


export type MutationDeleteGameArgs = {
  filter: GameFilter;
};


export type MutationDeletePeopleArgs = {
  filter: PeopleFilter;
};


export type MutationUpdateAwardArgs = {
  input: UpdateAwardInput;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


export type MutationUpdateFestivalArgs = {
  input: UpdateFestivalInput;
};


export type MutationUpdateGameArgs = {
  input: UpdateGameInput;
};


export type MutationUpdatePeopleArgs = {
  input: UpdatePeopleInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type People = {
  __typename?: 'People';
  firstName: Scalars['String'];
  gameAuthor?: Maybe<Array<Maybe<Game>>>;
  gameAuthorAggregate?: Maybe<GameAggregateResult>;
  gameIllustrator?: Maybe<Array<Maybe<Game>>>;
  gameIllustratorAggregate?: Maybe<GameAggregateResult>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
};


export type PeopleGameAuthorArgs = {
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
};


export type PeopleGameAuthorAggregateArgs = {
  filter?: InputMaybe<GameFilter>;
};


export type PeopleGameIllustratorArgs = {
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
};


export type PeopleGameIllustratorAggregateArgs = {
  filter?: InputMaybe<GameFilter>;
};

export type PeopleAggregateResult = {
  __typename?: 'PeopleAggregateResult';
  count?: Maybe<Scalars['Int']>;
  firstNameMax?: Maybe<Scalars['String']>;
  firstNameMin?: Maybe<Scalars['String']>;
  lastNameMax?: Maybe<Scalars['String']>;
  lastNameMin?: Maybe<Scalars['String']>;
};

export type PeopleFilter = {
  and?: InputMaybe<Array<InputMaybe<PeopleFilter>>>;
  firstName?: InputMaybe<StringTermFilter>;
  has?: InputMaybe<Array<InputMaybe<PeopleHasFilter>>>;
  id?: InputMaybe<Array<Scalars['ID']>>;
  lastName?: InputMaybe<StringTermFilter>;
  not?: InputMaybe<PeopleFilter>;
  or?: InputMaybe<Array<InputMaybe<PeopleFilter>>>;
};

export enum PeopleHasFilter {
  FirstName = 'firstName',
  GameAuthor = 'gameAuthor',
  GameIllustrator = 'gameIllustrator',
  LastName = 'lastName'
}

export type PeopleOrder = {
  asc?: InputMaybe<PeopleOrderable>;
  desc?: InputMaybe<PeopleOrderable>;
  then?: InputMaybe<PeopleOrder>;
};

export enum PeopleOrderable {
  FirstName = 'firstName',
  LastName = 'lastName'
}

export type PeoplePatch = {
  firstName?: InputMaybe<Scalars['String']>;
  gameAuthor?: InputMaybe<Array<InputMaybe<GameRef>>>;
  gameIllustrator?: InputMaybe<Array<InputMaybe<GameRef>>>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type PeopleRef = {
  firstName?: InputMaybe<Scalars['String']>;
  gameAuthor?: InputMaybe<Array<InputMaybe<GameRef>>>;
  gameIllustrator?: InputMaybe<Array<InputMaybe<GameRef>>>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
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
  aggregateAward?: Maybe<AwardAggregateResult>;
  aggregateCompany?: Maybe<CompanyAggregateResult>;
  aggregateEvent?: Maybe<EventAggregateResult>;
  aggregateFestival?: Maybe<FestivalAggregateResult>;
  aggregateGame?: Maybe<GameAggregateResult>;
  aggregatePeople?: Maybe<PeopleAggregateResult>;
  getAward?: Maybe<Award>;
  getCompany?: Maybe<Company>;
  getEvent?: Maybe<Event>;
  getFestival?: Maybe<Festival>;
  getGame?: Maybe<Game>;
  getPeople?: Maybe<People>;
  queryAward?: Maybe<Array<Maybe<Award>>>;
  queryCompany?: Maybe<Array<Maybe<Company>>>;
  queryEvent?: Maybe<Array<Maybe<Event>>>;
  queryFestival?: Maybe<Array<Maybe<Festival>>>;
  queryGame?: Maybe<Array<Maybe<Game>>>;
  queryPeople?: Maybe<Array<Maybe<People>>>;
};


export type QueryAggregateAwardArgs = {
  filter?: InputMaybe<AwardFilter>;
};


export type QueryAggregateCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
};


export type QueryAggregateEventArgs = {
  filter?: InputMaybe<EventFilter>;
};


export type QueryAggregateFestivalArgs = {
  filter?: InputMaybe<FestivalFilter>;
};


export type QueryAggregateGameArgs = {
  filter?: InputMaybe<GameFilter>;
};


export type QueryAggregatePeopleArgs = {
  filter?: InputMaybe<PeopleFilter>;
};


export type QueryGetAwardArgs = {
  id: Scalars['ID'];
};


export type QueryGetCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryGetEventArgs = {
  id: Scalars['ID'];
};


export type QueryGetFestivalArgs = {
  id: Scalars['ID'];
};


export type QueryGetGameArgs = {
  id: Scalars['ID'];
};


export type QueryGetPeopleArgs = {
  id: Scalars['ID'];
};


export type QueryQueryAwardArgs = {
  filter?: InputMaybe<AwardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AwardOrder>;
};


export type QueryQueryCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};


export type QueryQueryEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<EventOrder>;
};


export type QueryQueryFestivalArgs = {
  filter?: InputMaybe<FestivalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FestivalOrder>;
};


export type QueryQueryGameArgs = {
  filter?: InputMaybe<GameFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
};


export type QueryQueryPeopleArgs = {
  filter?: InputMaybe<PeopleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PeopleOrder>;
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

export type UpdateAwardInput = {
  filter: AwardFilter;
  remove?: InputMaybe<AwardPatch>;
  set?: InputMaybe<AwardPatch>;
};

export type UpdateAwardPayload = {
  __typename?: 'UpdateAwardPayload';
  award?: Maybe<Array<Maybe<Award>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateAwardPayloadAwardArgs = {
  filter?: InputMaybe<AwardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<AwardOrder>;
};

export type UpdateCompanyInput = {
  filter: CompanyFilter;
  remove?: InputMaybe<CompanyPatch>;
  set?: InputMaybe<CompanyPatch>;
};

export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  company?: Maybe<Array<Maybe<Company>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCompanyPayloadCompanyArgs = {
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<CompanyOrder>;
};

export type UpdateEventInput = {
  filter: EventFilter;
  remove?: InputMaybe<EventPatch>;
  set?: InputMaybe<EventPatch>;
};

export type UpdateEventPayload = {
  __typename?: 'UpdateEventPayload';
  event?: Maybe<Array<Maybe<Event>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateEventPayloadEventArgs = {
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<EventOrder>;
};

export type UpdateFestivalInput = {
  filter: FestivalFilter;
  remove?: InputMaybe<FestivalPatch>;
  set?: InputMaybe<FestivalPatch>;
};

export type UpdateFestivalPayload = {
  __typename?: 'UpdateFestivalPayload';
  festival?: Maybe<Array<Maybe<Festival>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateFestivalPayloadFestivalArgs = {
  filter?: InputMaybe<FestivalFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<FestivalOrder>;
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

export type UpdatePeopleInput = {
  filter: PeopleFilter;
  remove?: InputMaybe<PeoplePatch>;
  set?: InputMaybe<PeoplePatch>;
};

export type UpdatePeoplePayload = {
  __typename?: 'UpdatePeoplePayload';
  numUids?: Maybe<Scalars['Int']>;
  people?: Maybe<Array<Maybe<People>>>;
};


export type UpdatePeoplePayloadPeopleArgs = {
  filter?: InputMaybe<PeopleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PeopleOrder>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type CompanyDataFragment = { __typename?: 'Company', id: string, name: string };

export type AllCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCompaniesQuery = { __typename?: 'Query', queryCompany?: Array<{ __typename?: 'Company', id: string, name: string } | null> | null };

export type GetCompanyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCompanyQuery = { __typename?: 'Query', getCompany?: { __typename?: 'Company', id: string, name: string } | null };

export type AddCompanyMutationVariables = Exact<{
  company: AddCompanyInput;
}>;


export type AddCompanyMutation = { __typename?: 'Mutation', addCompany?: { __typename?: 'AddCompanyPayload', company?: Array<{ __typename?: 'Company', id: string, name: string } | null> | null } | null };

export type FestivalFragmentFragment = { __typename?: 'Festival', id: string, name: string };

export type FestivalDataFragment = { __typename?: 'Festival', id: string, name: string };

export type AllFestivalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFestivalsQuery = { __typename?: 'Query', queryFestival?: Array<{ __typename?: 'Festival', id: string, name: string } | null> | null };

export type GetFestivalQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFestivalQuery = { __typename?: 'Query', getFestival?: { __typename?: 'Festival', id: string, name: string } | null };

export type AddFestivalMutationVariables = Exact<{
  festival: AddFestivalInput;
}>;


export type AddFestivalMutation = { __typename?: 'Mutation', addFestival?: { __typename?: 'AddFestivalPayload', festival?: Array<{ __typename?: 'Festival', id: string, name: string } | null> | null } | null };

export type GameFragmentFragment = { __typename?: 'Game', id: string, name: string };

export type GameDataFragment = { __typename?: 'Game', id: string, name: string, authors?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null, illustrators?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null };

export type AllGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGamesQuery = { __typename?: 'Query', queryGame?: Array<{ __typename?: 'Game', id: string, name: string, authors?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null, illustrators?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null } | null> | null };

export type GetGameQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetGameQuery = { __typename?: 'Query', getGame?: { __typename?: 'Game', id: string, name: string, authors?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null, illustrators?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null } | null };

export type AddGameMutationVariables = Exact<{
  game: AddGameInput;
}>;


export type AddGameMutation = { __typename?: 'Mutation', addGame?: { __typename?: 'AddGamePayload', game?: Array<{ __typename?: 'Game', id: string, name: string, authors?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null, illustrators?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null } | null> | null } | null };

export type UpdateGameMutationVariables = Exact<{
  patch: UpdateGameInput;
}>;


export type UpdateGameMutation = { __typename?: 'Mutation', updateGame?: { __typename?: 'UpdateGamePayload', game?: Array<{ __typename?: 'Game', id: string, name: string, authors?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null, illustrators?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string } | null> | null } | null> | null } | null };

export type PeopleFragmentFragment = { __typename?: 'People', id: string, firstName: string, lastName: string };

export type PeopleDataFragment = { __typename?: 'People', id: string, firstName: string, lastName: string, gameAuthor?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null, gameIllustrator?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null };

export type AllPeoplesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPeoplesQuery = { __typename?: 'Query', queryPeople?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string, gameAuthor?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null, gameIllustrator?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null } | null> | null };

export type GetPeopleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPeopleQuery = { __typename?: 'Query', getPeople?: { __typename?: 'People', id: string, firstName: string, lastName: string, gameAuthor?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null, gameIllustrator?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null } | null };

export type AddPeopleMutationVariables = Exact<{
  people: AddPeopleInput;
}>;


export type AddPeopleMutation = { __typename?: 'Mutation', addPeople?: { __typename?: 'AddPeoplePayload', people?: Array<{ __typename?: 'People', id: string, firstName: string, lastName: string, gameAuthor?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null, gameIllustrator?: Array<{ __typename?: 'Game', id: string, name: string } | null> | null } | null> | null } | null };

export const CompanyDataFragmentDoc = gql`
    fragment companyData on Company {
  id
  name
}
    `;
export const FestivalFragmentFragmentDoc = gql`
    fragment festivalFragment on Festival {
  id
  name
}
    `;
export const FestivalDataFragmentDoc = gql`
    fragment festivalData on Festival {
  ...festivalFragment
}
    ${FestivalFragmentFragmentDoc}`;
export const GameFragmentFragmentDoc = gql`
    fragment gameFragment on Game {
  id
  name
}
    `;
export const PeopleFragmentFragmentDoc = gql`
    fragment peopleFragment on People {
  id
  firstName
  lastName
}
    `;
export const GameDataFragmentDoc = gql`
    fragment gameData on Game {
  ...gameFragment
  authors {
    ...peopleFragment
  }
  illustrators {
    ...peopleFragment
  }
}
    ${GameFragmentFragmentDoc}
${PeopleFragmentFragmentDoc}`;
export const PeopleDataFragmentDoc = gql`
    fragment peopleData on People {
  ...peopleFragment
  gameAuthor {
    ...gameFragment
  }
  gameIllustrator {
    ...gameFragment
  }
}
    ${PeopleFragmentFragmentDoc}
${GameFragmentFragmentDoc}`;
export const AllCompaniesDocument = gql`
    query allCompanies {
  queryCompany {
    ...companyData
  }
}
    ${CompanyDataFragmentDoc}`;

/**
 * __useAllCompaniesQuery__
 *
 * To run a query within a React component, call `useAllCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<AllCompaniesQuery, AllCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCompaniesQuery, AllCompaniesQueryVariables>(AllCompaniesDocument, options);
      }
export function useAllCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCompaniesQuery, AllCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCompaniesQuery, AllCompaniesQueryVariables>(AllCompaniesDocument, options);
        }
export type AllCompaniesQueryHookResult = ReturnType<typeof useAllCompaniesQuery>;
export type AllCompaniesLazyQueryHookResult = ReturnType<typeof useAllCompaniesLazyQuery>;
export type AllCompaniesQueryResult = Apollo.QueryResult<AllCompaniesQuery, AllCompaniesQueryVariables>;
export const GetCompanyDocument = gql`
    query getCompany($id: ID!) {
  getCompany(id: $id) {
    ...companyData
  }
}
    ${CompanyDataFragmentDoc}`;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCompanyQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
      }
export function useGetCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
        }
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<typeof useGetCompanyLazyQuery>;
export type GetCompanyQueryResult = Apollo.QueryResult<GetCompanyQuery, GetCompanyQueryVariables>;
export const AddCompanyDocument = gql`
    mutation addCompany($company: AddCompanyInput!) {
  addCompany(input: [$company]) {
    company {
      ...companyData
    }
  }
}
    ${CompanyDataFragmentDoc}`;
export type AddCompanyMutationFn = Apollo.MutationFunction<AddCompanyMutation, AddCompanyMutationVariables>;

/**
 * __useAddCompanyMutation__
 *
 * To run a mutation, you first call `useAddCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCompanyMutation, { data, loading, error }] = useAddCompanyMutation({
 *   variables: {
 *      company: // value for 'company'
 *   },
 * });
 */
export function useAddCompanyMutation(baseOptions?: Apollo.MutationHookOptions<AddCompanyMutation, AddCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCompanyMutation, AddCompanyMutationVariables>(AddCompanyDocument, options);
      }
export type AddCompanyMutationHookResult = ReturnType<typeof useAddCompanyMutation>;
export type AddCompanyMutationResult = Apollo.MutationResult<AddCompanyMutation>;
export type AddCompanyMutationOptions = Apollo.BaseMutationOptions<AddCompanyMutation, AddCompanyMutationVariables>;
export const AllFestivalsDocument = gql`
    query allFestivals {
  queryFestival {
    ...festivalData
  }
}
    ${FestivalDataFragmentDoc}`;

/**
 * __useAllFestivalsQuery__
 *
 * To run a query within a React component, call `useAllFestivalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFestivalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFestivalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFestivalsQuery(baseOptions?: Apollo.QueryHookOptions<AllFestivalsQuery, AllFestivalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllFestivalsQuery, AllFestivalsQueryVariables>(AllFestivalsDocument, options);
      }
export function useAllFestivalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllFestivalsQuery, AllFestivalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllFestivalsQuery, AllFestivalsQueryVariables>(AllFestivalsDocument, options);
        }
export type AllFestivalsQueryHookResult = ReturnType<typeof useAllFestivalsQuery>;
export type AllFestivalsLazyQueryHookResult = ReturnType<typeof useAllFestivalsLazyQuery>;
export type AllFestivalsQueryResult = Apollo.QueryResult<AllFestivalsQuery, AllFestivalsQueryVariables>;
export const GetFestivalDocument = gql`
    query getFestival($id: ID!) {
  getFestival(id: $id) {
    ...festivalData
  }
}
    ${FestivalDataFragmentDoc}`;

/**
 * __useGetFestivalQuery__
 *
 * To run a query within a React component, call `useGetFestivalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFestivalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFestivalQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFestivalQuery(baseOptions: Apollo.QueryHookOptions<GetFestivalQuery, GetFestivalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFestivalQuery, GetFestivalQueryVariables>(GetFestivalDocument, options);
      }
export function useGetFestivalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFestivalQuery, GetFestivalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFestivalQuery, GetFestivalQueryVariables>(GetFestivalDocument, options);
        }
export type GetFestivalQueryHookResult = ReturnType<typeof useGetFestivalQuery>;
export type GetFestivalLazyQueryHookResult = ReturnType<typeof useGetFestivalLazyQuery>;
export type GetFestivalQueryResult = Apollo.QueryResult<GetFestivalQuery, GetFestivalQueryVariables>;
export const AddFestivalDocument = gql`
    mutation addFestival($festival: AddFestivalInput!) {
  addFestival(input: [$festival]) {
    festival {
      ...festivalData
    }
  }
}
    ${FestivalDataFragmentDoc}`;
export type AddFestivalMutationFn = Apollo.MutationFunction<AddFestivalMutation, AddFestivalMutationVariables>;

/**
 * __useAddFestivalMutation__
 *
 * To run a mutation, you first call `useAddFestivalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFestivalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFestivalMutation, { data, loading, error }] = useAddFestivalMutation({
 *   variables: {
 *      festival: // value for 'festival'
 *   },
 * });
 */
export function useAddFestivalMutation(baseOptions?: Apollo.MutationHookOptions<AddFestivalMutation, AddFestivalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFestivalMutation, AddFestivalMutationVariables>(AddFestivalDocument, options);
      }
export type AddFestivalMutationHookResult = ReturnType<typeof useAddFestivalMutation>;
export type AddFestivalMutationResult = Apollo.MutationResult<AddFestivalMutation>;
export type AddFestivalMutationOptions = Apollo.BaseMutationOptions<AddFestivalMutation, AddFestivalMutationVariables>;
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
export const AllPeoplesDocument = gql`
    query allPeoples {
  queryPeople {
    ...peopleData
  }
}
    ${PeopleDataFragmentDoc}`;

/**
 * __useAllPeoplesQuery__
 *
 * To run a query within a React component, call `useAllPeoplesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPeoplesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPeoplesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPeoplesQuery(baseOptions?: Apollo.QueryHookOptions<AllPeoplesQuery, AllPeoplesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPeoplesQuery, AllPeoplesQueryVariables>(AllPeoplesDocument, options);
      }
export function useAllPeoplesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPeoplesQuery, AllPeoplesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPeoplesQuery, AllPeoplesQueryVariables>(AllPeoplesDocument, options);
        }
export type AllPeoplesQueryHookResult = ReturnType<typeof useAllPeoplesQuery>;
export type AllPeoplesLazyQueryHookResult = ReturnType<typeof useAllPeoplesLazyQuery>;
export type AllPeoplesQueryResult = Apollo.QueryResult<AllPeoplesQuery, AllPeoplesQueryVariables>;
export const GetPeopleDocument = gql`
    query getPeople($id: ID!) {
  getPeople(id: $id) {
    ...peopleData
  }
}
    ${PeopleDataFragmentDoc}`;

/**
 * __useGetPeopleQuery__
 *
 * To run a query within a React component, call `useGetPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPeopleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPeopleQuery(baseOptions: Apollo.QueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
      }
export function useGetPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPeopleQuery, GetPeopleQueryVariables>(GetPeopleDocument, options);
        }
export type GetPeopleQueryHookResult = ReturnType<typeof useGetPeopleQuery>;
export type GetPeopleLazyQueryHookResult = ReturnType<typeof useGetPeopleLazyQuery>;
export type GetPeopleQueryResult = Apollo.QueryResult<GetPeopleQuery, GetPeopleQueryVariables>;
export const AddPeopleDocument = gql`
    mutation addPeople($people: AddPeopleInput!) {
  addPeople(input: [$people]) {
    people {
      ...peopleData
    }
  }
}
    ${PeopleDataFragmentDoc}`;
export type AddPeopleMutationFn = Apollo.MutationFunction<AddPeopleMutation, AddPeopleMutationVariables>;

/**
 * __useAddPeopleMutation__
 *
 * To run a mutation, you first call `useAddPeopleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPeopleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPeopleMutation, { data, loading, error }] = useAddPeopleMutation({
 *   variables: {
 *      people: // value for 'people'
 *   },
 * });
 */
export function useAddPeopleMutation(baseOptions?: Apollo.MutationHookOptions<AddPeopleMutation, AddPeopleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPeopleMutation, AddPeopleMutationVariables>(AddPeopleDocument, options);
      }
export type AddPeopleMutationHookResult = ReturnType<typeof useAddPeopleMutation>;
export type AddPeopleMutationResult = Apollo.MutationResult<AddPeopleMutation>;
export type AddPeopleMutationOptions = Apollo.BaseMutationOptions<AddPeopleMutation, AddPeopleMutationVariables>;