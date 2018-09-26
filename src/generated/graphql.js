module.exports = {
        typeDefs: `type Activity {
  id: ID!
  type: ActivityType!
  user: User!
  checkLyst: CheckLyst!
}

type ActivityConnection {
  pageInfo: PageInfo!
  edges: [ActivityEdge]!
  aggregate: AggregateActivity!
}

input ActivityCreateInput {
  type: ActivityType!
  user: UserCreateOneInput!
  checkLyst: CheckLystCreateOneWithoutActivityLogInput!
}

input ActivityCreateManyInput {
  create: [ActivityCreateInput!]
  connect: [ActivityWhereUniqueInput!]
}

input ActivityCreateManyWithoutCheckLystInput {
  create: [ActivityCreateWithoutCheckLystInput!]
  connect: [ActivityWhereUniqueInput!]
}

input ActivityCreateWithoutCheckLystInput {
  type: ActivityType!
  user: UserCreateOneInput!
}

type ActivityEdge {
  node: Activity!
  cursor: String!
}

enum ActivityOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityPreviousValues {
  id: ID!
  type: ActivityType!
}

type ActivitySubscriptionPayload {
  mutation: MutationType!
  node: Activity
  updatedFields: [String!]
  previousValues: ActivityPreviousValues
}

input ActivitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityWhereInput
  AND: [ActivitySubscriptionWhereInput!]
  OR: [ActivitySubscriptionWhereInput!]
  NOT: [ActivitySubscriptionWhereInput!]
}

enum ActivityType {
  CREATE
  EDIT
  DELETE
  COMPLETE
}

input ActivityUpdateDataInput {
  type: ActivityType
  user: UserUpdateOneInput
  checkLyst: CheckLystUpdateOneWithoutActivityLogInput
}

input ActivityUpdateInput {
  type: ActivityType
  user: UserUpdateOneInput
  checkLyst: CheckLystUpdateOneWithoutActivityLogInput
}

input ActivityUpdateManyInput {
  create: [ActivityCreateInput!]
  delete: [ActivityWhereUniqueInput!]
  connect: [ActivityWhereUniqueInput!]
  disconnect: [ActivityWhereUniqueInput!]
  update: [ActivityUpdateWithWhereUniqueNestedInput!]
  upsert: [ActivityUpsertWithWhereUniqueNestedInput!]
}

input ActivityUpdateManyWithoutCheckLystInput {
  create: [ActivityCreateWithoutCheckLystInput!]
  delete: [ActivityWhereUniqueInput!]
  connect: [ActivityWhereUniqueInput!]
  disconnect: [ActivityWhereUniqueInput!]
  update: [ActivityUpdateWithWhereUniqueWithoutCheckLystInput!]
  upsert: [ActivityUpsertWithWhereUniqueWithoutCheckLystInput!]
}

input ActivityUpdateWithoutCheckLystDataInput {
  type: ActivityType
  user: UserUpdateOneInput
}

input ActivityUpdateWithWhereUniqueNestedInput {
  where: ActivityWhereUniqueInput!
  data: ActivityUpdateDataInput!
}

input ActivityUpdateWithWhereUniqueWithoutCheckLystInput {
  where: ActivityWhereUniqueInput!
  data: ActivityUpdateWithoutCheckLystDataInput!
}

input ActivityUpsertWithWhereUniqueNestedInput {
  where: ActivityWhereUniqueInput!
  update: ActivityUpdateDataInput!
  create: ActivityCreateInput!
}

input ActivityUpsertWithWhereUniqueWithoutCheckLystInput {
  where: ActivityWhereUniqueInput!
  update: ActivityUpdateWithoutCheckLystDataInput!
  create: ActivityCreateWithoutCheckLystInput!
}

input ActivityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: ActivityType
  type_not: ActivityType
  type_in: [ActivityType!]
  type_not_in: [ActivityType!]
  user: UserWhereInput
  checkLyst: CheckLystWhereInput
  AND: [ActivityWhereInput!]
  OR: [ActivityWhereInput!]
  NOT: [ActivityWhereInput!]
}

input ActivityWhereUniqueInput {
  id: ID
}

type AggregateActivity {
  count: Int!
}

type AggregateCheckLyst {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateLabel {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateTemplateLyst {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CheckLyst {
  id: ID!
  name: String!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  createdBy: User!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  activityLog(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity!]
  label: Label
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type CheckLystConnection {
  pageInfo: PageInfo!
  edges: [CheckLystEdge]!
  aggregate: AggregateCheckLyst!
}

input CheckLystCreateInput {
  name: String!
  items: ItemCreateManyInput
  createdBy: UserCreateOneInput!
  users: UserCreateManyWithoutCheckLystsInput
  activityLog: ActivityCreateManyWithoutCheckLystInput
  label: LabelCreateOneWithoutCheckLystsInput
  teams: TeamCreateManyWithoutCheckLystsInput
}

input CheckLystCreateManyWithoutLabelInput {
  create: [CheckLystCreateWithoutLabelInput!]
  connect: [CheckLystWhereUniqueInput!]
}

input CheckLystCreateManyWithoutTeamsInput {
  create: [CheckLystCreateWithoutTeamsInput!]
  connect: [CheckLystWhereUniqueInput!]
}

input CheckLystCreateManyWithoutUsersInput {
  create: [CheckLystCreateWithoutUsersInput!]
  connect: [CheckLystWhereUniqueInput!]
}

input CheckLystCreateOneWithoutActivityLogInput {
  create: CheckLystCreateWithoutActivityLogInput
  connect: CheckLystWhereUniqueInput
}

input CheckLystCreateWithoutActivityLogInput {
  name: String!
  items: ItemCreateManyInput
  createdBy: UserCreateOneInput!
  users: UserCreateManyWithoutCheckLystsInput
  label: LabelCreateOneWithoutCheckLystsInput
  teams: TeamCreateManyWithoutCheckLystsInput
}

input CheckLystCreateWithoutLabelInput {
  name: String!
  items: ItemCreateManyInput
  createdBy: UserCreateOneInput!
  users: UserCreateManyWithoutCheckLystsInput
  activityLog: ActivityCreateManyWithoutCheckLystInput
  teams: TeamCreateManyWithoutCheckLystsInput
}

input CheckLystCreateWithoutTeamsInput {
  name: String!
  items: ItemCreateManyInput
  createdBy: UserCreateOneInput!
  users: UserCreateManyWithoutCheckLystsInput
  activityLog: ActivityCreateManyWithoutCheckLystInput
  label: LabelCreateOneWithoutCheckLystsInput
}

input CheckLystCreateWithoutUsersInput {
  name: String!
  items: ItemCreateManyInput
  createdBy: UserCreateOneInput!
  activityLog: ActivityCreateManyWithoutCheckLystInput
  label: LabelCreateOneWithoutCheckLystsInput
  teams: TeamCreateManyWithoutCheckLystsInput
}

type CheckLystEdge {
  node: CheckLyst!
  cursor: String!
}

enum CheckLystOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CheckLystPreviousValues {
  id: ID!
  name: String!
}

type CheckLystSubscriptionPayload {
  mutation: MutationType!
  node: CheckLyst
  updatedFields: [String!]
  previousValues: CheckLystPreviousValues
}

input CheckLystSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CheckLystWhereInput
  AND: [CheckLystSubscriptionWhereInput!]
  OR: [CheckLystSubscriptionWhereInput!]
  NOT: [CheckLystSubscriptionWhereInput!]
}

input CheckLystUpdateInput {
  name: String
  items: ItemUpdateManyInput
  createdBy: UserUpdateOneInput
  users: UserUpdateManyWithoutCheckLystsInput
  activityLog: ActivityUpdateManyWithoutCheckLystInput
  label: LabelUpdateOneWithoutCheckLystsInput
  teams: TeamUpdateManyWithoutCheckLystsInput
}

input CheckLystUpdateManyWithoutLabelInput {
  create: [CheckLystCreateWithoutLabelInput!]
  delete: [CheckLystWhereUniqueInput!]
  connect: [CheckLystWhereUniqueInput!]
  disconnect: [CheckLystWhereUniqueInput!]
  update: [CheckLystUpdateWithWhereUniqueWithoutLabelInput!]
  upsert: [CheckLystUpsertWithWhereUniqueWithoutLabelInput!]
}

input CheckLystUpdateManyWithoutTeamsInput {
  create: [CheckLystCreateWithoutTeamsInput!]
  delete: [CheckLystWhereUniqueInput!]
  connect: [CheckLystWhereUniqueInput!]
  disconnect: [CheckLystWhereUniqueInput!]
  update: [CheckLystUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [CheckLystUpsertWithWhereUniqueWithoutTeamsInput!]
}

input CheckLystUpdateManyWithoutUsersInput {
  create: [CheckLystCreateWithoutUsersInput!]
  delete: [CheckLystWhereUniqueInput!]
  connect: [CheckLystWhereUniqueInput!]
  disconnect: [CheckLystWhereUniqueInput!]
  update: [CheckLystUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [CheckLystUpsertWithWhereUniqueWithoutUsersInput!]
}

input CheckLystUpdateOneWithoutActivityLogInput {
  create: CheckLystCreateWithoutActivityLogInput
  update: CheckLystUpdateWithoutActivityLogDataInput
  upsert: CheckLystUpsertWithoutActivityLogInput
  delete: Boolean
  connect: CheckLystWhereUniqueInput
}

input CheckLystUpdateWithoutActivityLogDataInput {
  name: String
  items: ItemUpdateManyInput
  createdBy: UserUpdateOneInput
  users: UserUpdateManyWithoutCheckLystsInput
  label: LabelUpdateOneWithoutCheckLystsInput
  teams: TeamUpdateManyWithoutCheckLystsInput
}

input CheckLystUpdateWithoutLabelDataInput {
  name: String
  items: ItemUpdateManyInput
  createdBy: UserUpdateOneInput
  users: UserUpdateManyWithoutCheckLystsInput
  activityLog: ActivityUpdateManyWithoutCheckLystInput
  teams: TeamUpdateManyWithoutCheckLystsInput
}

input CheckLystUpdateWithoutTeamsDataInput {
  name: String
  items: ItemUpdateManyInput
  createdBy: UserUpdateOneInput
  users: UserUpdateManyWithoutCheckLystsInput
  activityLog: ActivityUpdateManyWithoutCheckLystInput
  label: LabelUpdateOneWithoutCheckLystsInput
}

input CheckLystUpdateWithoutUsersDataInput {
  name: String
  items: ItemUpdateManyInput
  createdBy: UserUpdateOneInput
  activityLog: ActivityUpdateManyWithoutCheckLystInput
  label: LabelUpdateOneWithoutCheckLystsInput
  teams: TeamUpdateManyWithoutCheckLystsInput
}

input CheckLystUpdateWithWhereUniqueWithoutLabelInput {
  where: CheckLystWhereUniqueInput!
  data: CheckLystUpdateWithoutLabelDataInput!
}

input CheckLystUpdateWithWhereUniqueWithoutTeamsInput {
  where: CheckLystWhereUniqueInput!
  data: CheckLystUpdateWithoutTeamsDataInput!
}

input CheckLystUpdateWithWhereUniqueWithoutUsersInput {
  where: CheckLystWhereUniqueInput!
  data: CheckLystUpdateWithoutUsersDataInput!
}

input CheckLystUpsertWithoutActivityLogInput {
  update: CheckLystUpdateWithoutActivityLogDataInput!
  create: CheckLystCreateWithoutActivityLogInput!
}

input CheckLystUpsertWithWhereUniqueWithoutLabelInput {
  where: CheckLystWhereUniqueInput!
  update: CheckLystUpdateWithoutLabelDataInput!
  create: CheckLystCreateWithoutLabelInput!
}

input CheckLystUpsertWithWhereUniqueWithoutTeamsInput {
  where: CheckLystWhereUniqueInput!
  update: CheckLystUpdateWithoutTeamsDataInput!
  create: CheckLystCreateWithoutTeamsInput!
}

input CheckLystUpsertWithWhereUniqueWithoutUsersInput {
  where: CheckLystWhereUniqueInput!
  update: CheckLystUpdateWithoutUsersDataInput!
  create: CheckLystCreateWithoutUsersInput!
}

input CheckLystWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  createdBy: UserWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  activityLog_every: ActivityWhereInput
  activityLog_some: ActivityWhereInput
  activityLog_none: ActivityWhereInput
  label: LabelWhereInput
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  AND: [CheckLystWhereInput!]
  OR: [CheckLystWhereInput!]
  NOT: [CheckLystWhereInput!]
}

input CheckLystWhereUniqueInput {
  id: ID
}

enum Color {
  BLUE
  GREEN
  PINK
  ORANGE
  PURPLE
}

type Item {
  id: ID!
  name: String!
  completed: Boolean!
  completedBy: User
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  name: String!
  completed: Boolean
  completedBy: UserCreateOneInput
}

input ItemCreateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  completed_ASC
  completed_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
  completed: Boolean!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  name: String
  completed: Boolean
  completedBy: UserUpdateOneInput
}

input ItemUpdateInput {
  name: String
  completed: Boolean
  completedBy: UserUpdateOneInput
}

input ItemUpdateManyInput {
  create: [ItemCreateInput!]
  delete: [ItemWhereUniqueInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ItemUpsertWithWhereUniqueNestedInput!]
}

input ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateDataInput!
}

input ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  completedBy: UserWhereInput
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

type Label {
  id: ID!
  user: User!
  checkLysts(where: CheckLystWhereInput, orderBy: CheckLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CheckLyst!]
  name: String!
  color: Color!
}

type LabelConnection {
  pageInfo: PageInfo!
  edges: [LabelEdge]!
  aggregate: AggregateLabel!
}

input LabelCreateInput {
  user: UserCreateOneInput!
  checkLysts: CheckLystCreateManyWithoutLabelInput
  name: String!
  color: Color!
}

input LabelCreateOneWithoutCheckLystsInput {
  create: LabelCreateWithoutCheckLystsInput
  connect: LabelWhereUniqueInput
}

input LabelCreateWithoutCheckLystsInput {
  user: UserCreateOneInput!
  name: String!
  color: Color!
}

type LabelEdge {
  node: Label!
  cursor: String!
}

enum LabelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LabelPreviousValues {
  id: ID!
  name: String!
  color: Color!
}

type LabelSubscriptionPayload {
  mutation: MutationType!
  node: Label
  updatedFields: [String!]
  previousValues: LabelPreviousValues
}

input LabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LabelWhereInput
  AND: [LabelSubscriptionWhereInput!]
  OR: [LabelSubscriptionWhereInput!]
  NOT: [LabelSubscriptionWhereInput!]
}

input LabelUpdateInput {
  user: UserUpdateOneInput
  checkLysts: CheckLystUpdateManyWithoutLabelInput
  name: String
  color: Color
}

input LabelUpdateOneWithoutCheckLystsInput {
  create: LabelCreateWithoutCheckLystsInput
  update: LabelUpdateWithoutCheckLystsDataInput
  upsert: LabelUpsertWithoutCheckLystsInput
  delete: Boolean
  disconnect: Boolean
  connect: LabelWhereUniqueInput
}

input LabelUpdateWithoutCheckLystsDataInput {
  user: UserUpdateOneInput
  name: String
  color: Color
}

input LabelUpsertWithoutCheckLystsInput {
  update: LabelUpdateWithoutCheckLystsDataInput!
  create: LabelCreateWithoutCheckLystsInput!
}

input LabelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  checkLysts_every: CheckLystWhereInput
  checkLysts_some: CheckLystWhereInput
  checkLysts_none: CheckLystWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: Color
  color_not: Color
  color_in: [Color!]
  color_not_in: [Color!]
  AND: [LabelWhereInput!]
  OR: [LabelWhereInput!]
  NOT: [LabelWhereInput!]
}

input LabelWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createActivity(data: ActivityCreateInput!): Activity!
  updateActivity(data: ActivityUpdateInput!, where: ActivityWhereUniqueInput!): Activity
  updateManyActivities(data: ActivityUpdateInput!, where: ActivityWhereInput): BatchPayload!
  upsertActivity(where: ActivityWhereUniqueInput!, create: ActivityCreateInput!, update: ActivityUpdateInput!): Activity!
  deleteActivity(where: ActivityWhereUniqueInput!): Activity
  deleteManyActivities(where: ActivityWhereInput): BatchPayload!
  createCheckLyst(data: CheckLystCreateInput!): CheckLyst!
  updateCheckLyst(data: CheckLystUpdateInput!, where: CheckLystWhereUniqueInput!): CheckLyst
  updateManyCheckLysts(data: CheckLystUpdateInput!, where: CheckLystWhereInput): BatchPayload!
  upsertCheckLyst(where: CheckLystWhereUniqueInput!, create: CheckLystCreateInput!, update: CheckLystUpdateInput!): CheckLyst!
  deleteCheckLyst(where: CheckLystWhereUniqueInput!): CheckLyst
  deleteManyCheckLysts(where: CheckLystWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createLabel(data: LabelCreateInput!): Label!
  updateLabel(data: LabelUpdateInput!, where: LabelWhereUniqueInput!): Label
  updateManyLabels(data: LabelUpdateInput!, where: LabelWhereInput): BatchPayload!
  upsertLabel(where: LabelWhereUniqueInput!, create: LabelCreateInput!, update: LabelUpdateInput!): Label!
  deleteLabel(where: LabelWhereUniqueInput!): Label
  deleteManyLabels(where: LabelWhereInput): BatchPayload!
  createTemplateLyst(data: TemplateLystCreateInput!): TemplateLyst!
  updateTemplateLyst(data: TemplateLystUpdateInput!, where: TemplateLystWhereUniqueInput!): TemplateLyst
  updateManyTemplateLysts(data: TemplateLystUpdateInput!, where: TemplateLystWhereInput): BatchPayload!
  upsertTemplateLyst(where: TemplateLystWhereUniqueInput!, create: TemplateLystCreateInput!, update: TemplateLystUpdateInput!): TemplateLyst!
  deleteTemplateLyst(where: TemplateLystWhereUniqueInput!): TemplateLyst
  deleteManyTemplateLysts(where: TemplateLystWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  activity(where: ActivityWhereUniqueInput!): Activity
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity]!
  activitiesConnection(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityConnection!
  checkLyst(where: CheckLystWhereUniqueInput!): CheckLyst
  checkLysts(where: CheckLystWhereInput, orderBy: CheckLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CheckLyst]!
  checkLystsConnection(where: CheckLystWhereInput, orderBy: CheckLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CheckLystConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  label(where: LabelWhereUniqueInput!): Label
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label]!
  labelsConnection(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LabelConnection!
  templateLyst(where: TemplateLystWhereUniqueInput!): TemplateLyst
  templateLysts(where: TemplateLystWhereInput, orderBy: TemplateLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TemplateLyst]!
  templateLystsConnection(where: TemplateLystWhereInput, orderBy: TemplateLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TemplateLystConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  activity(where: ActivitySubscriptionWhereInput): ActivitySubscriptionPayload
  checkLyst(where: CheckLystSubscriptionWhereInput): CheckLystSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  label(where: LabelSubscriptionWhereInput): LabelSubscriptionPayload
  templateLyst(where: TemplateLystSubscriptionWhereInput): TemplateLystSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  owner: User!
  admins(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  creators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  logo: String
  checkLysts(where: CheckLystWhereInput, orderBy: CheckLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CheckLyst!]
  templateLysts(where: TemplateLystWhereInput, orderBy: TemplateLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TemplateLyst!]
  itemsCompleted: Int
  activityLogs(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity!]
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String!
  owner: UserCreateOneInput!
  admins: UserCreateManyInput
  creators: UserCreateManyInput
  users: UserCreateManyInput
  logo: String
  checkLysts: CheckLystCreateManyWithoutTeamsInput
  templateLysts: TemplateLystCreateManyWithoutTeamsInput
  itemsCompleted: Int
  activityLogs: ActivityCreateManyInput
}

input TeamCreateManyInput {
  create: [TeamCreateInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutCheckLystsInput {
  create: [TeamCreateWithoutCheckLystsInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutTemplateLystsInput {
  create: [TeamCreateWithoutTemplateLystsInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutCheckLystsInput {
  name: String!
  owner: UserCreateOneInput!
  admins: UserCreateManyInput
  creators: UserCreateManyInput
  users: UserCreateManyInput
  logo: String
  templateLysts: TemplateLystCreateManyWithoutTeamsInput
  itemsCompleted: Int
  activityLogs: ActivityCreateManyInput
}

input TeamCreateWithoutTemplateLystsInput {
  name: String!
  owner: UserCreateOneInput!
  admins: UserCreateManyInput
  creators: UserCreateManyInput
  users: UserCreateManyInput
  logo: String
  checkLysts: CheckLystCreateManyWithoutTeamsInput
  itemsCompleted: Int
  activityLogs: ActivityCreateManyInput
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  logo_ASC
  logo_DESC
  itemsCompleted_ASC
  itemsCompleted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  logo: String
  itemsCompleted: Int
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateDataInput {
  name: String
  owner: UserUpdateOneInput
  admins: UserUpdateManyInput
  creators: UserUpdateManyInput
  users: UserUpdateManyInput
  logo: String
  checkLysts: CheckLystUpdateManyWithoutTeamsInput
  templateLysts: TemplateLystUpdateManyWithoutTeamsInput
  itemsCompleted: Int
  activityLogs: ActivityUpdateManyInput
}

input TeamUpdateInput {
  name: String
  owner: UserUpdateOneInput
  admins: UserUpdateManyInput
  creators: UserUpdateManyInput
  users: UserUpdateManyInput
  logo: String
  checkLysts: CheckLystUpdateManyWithoutTeamsInput
  templateLysts: TemplateLystUpdateManyWithoutTeamsInput
  itemsCompleted: Int
  activityLogs: ActivityUpdateManyInput
}

input TeamUpdateManyInput {
  create: [TeamCreateInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueNestedInput!]
  upsert: [TeamUpsertWithWhereUniqueNestedInput!]
}

input TeamUpdateManyWithoutCheckLystsInput {
  create: [TeamCreateWithoutCheckLystsInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutCheckLystsInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutCheckLystsInput!]
}

input TeamUpdateManyWithoutTemplateLystsInput {
  create: [TeamCreateWithoutTemplateLystsInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutTemplateLystsInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutTemplateLystsInput!]
}

input TeamUpdateWithoutCheckLystsDataInput {
  name: String
  owner: UserUpdateOneInput
  admins: UserUpdateManyInput
  creators: UserUpdateManyInput
  users: UserUpdateManyInput
  logo: String
  templateLysts: TemplateLystUpdateManyWithoutTeamsInput
  itemsCompleted: Int
  activityLogs: ActivityUpdateManyInput
}

input TeamUpdateWithoutTemplateLystsDataInput {
  name: String
  owner: UserUpdateOneInput
  admins: UserUpdateManyInput
  creators: UserUpdateManyInput
  users: UserUpdateManyInput
  logo: String
  checkLysts: CheckLystUpdateManyWithoutTeamsInput
  itemsCompleted: Int
  activityLogs: ActivityUpdateManyInput
}

input TeamUpdateWithWhereUniqueNestedInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateDataInput!
}

input TeamUpdateWithWhereUniqueWithoutCheckLystsInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutCheckLystsDataInput!
}

input TeamUpdateWithWhereUniqueWithoutTemplateLystsInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutTemplateLystsDataInput!
}

input TeamUpsertWithWhereUniqueNestedInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateDataInput!
  create: TeamCreateInput!
}

input TeamUpsertWithWhereUniqueWithoutCheckLystsInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutCheckLystsDataInput!
  create: TeamCreateWithoutCheckLystsInput!
}

input TeamUpsertWithWhereUniqueWithoutTemplateLystsInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutTemplateLystsDataInput!
  create: TeamCreateWithoutTemplateLystsInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  owner: UserWhereInput
  admins_every: UserWhereInput
  admins_some: UserWhereInput
  admins_none: UserWhereInput
  creators_every: UserWhereInput
  creators_some: UserWhereInput
  creators_none: UserWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  logo: String
  logo_not: String
  logo_in: [String!]
  logo_not_in: [String!]
  logo_lt: String
  logo_lte: String
  logo_gt: String
  logo_gte: String
  logo_contains: String
  logo_not_contains: String
  logo_starts_with: String
  logo_not_starts_with: String
  logo_ends_with: String
  logo_not_ends_with: String
  checkLysts_every: CheckLystWhereInput
  checkLysts_some: CheckLystWhereInput
  checkLysts_none: CheckLystWhereInput
  templateLysts_every: TemplateLystWhereInput
  templateLysts_some: TemplateLystWhereInput
  templateLysts_none: TemplateLystWhereInput
  itemsCompleted: Int
  itemsCompleted_not: Int
  itemsCompleted_in: [Int!]
  itemsCompleted_not_in: [Int!]
  itemsCompleted_lt: Int
  itemsCompleted_lte: Int
  itemsCompleted_gt: Int
  itemsCompleted_gte: Int
  activityLogs_every: ActivityWhereInput
  activityLogs_some: ActivityWhereInput
  activityLogs_none: ActivityWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
}

type TemplateLyst {
  id: ID!
  name: String!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type TemplateLystConnection {
  pageInfo: PageInfo!
  edges: [TemplateLystEdge]!
  aggregate: AggregateTemplateLyst!
}

input TemplateLystCreateInput {
  name: String!
  items: ItemCreateManyInput
  users: UserCreateManyWithoutTemplateLystsInput
  teams: TeamCreateManyWithoutTemplateLystsInput
}

input TemplateLystCreateManyWithoutTeamsInput {
  create: [TemplateLystCreateWithoutTeamsInput!]
  connect: [TemplateLystWhereUniqueInput!]
}

input TemplateLystCreateManyWithoutUsersInput {
  create: [TemplateLystCreateWithoutUsersInput!]
  connect: [TemplateLystWhereUniqueInput!]
}

input TemplateLystCreateWithoutTeamsInput {
  name: String!
  items: ItemCreateManyInput
  users: UserCreateManyWithoutTemplateLystsInput
}

input TemplateLystCreateWithoutUsersInput {
  name: String!
  items: ItemCreateManyInput
  teams: TeamCreateManyWithoutTemplateLystsInput
}

type TemplateLystEdge {
  node: TemplateLyst!
  cursor: String!
}

enum TemplateLystOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TemplateLystPreviousValues {
  id: ID!
  name: String!
}

type TemplateLystSubscriptionPayload {
  mutation: MutationType!
  node: TemplateLyst
  updatedFields: [String!]
  previousValues: TemplateLystPreviousValues
}

input TemplateLystSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TemplateLystWhereInput
  AND: [TemplateLystSubscriptionWhereInput!]
  OR: [TemplateLystSubscriptionWhereInput!]
  NOT: [TemplateLystSubscriptionWhereInput!]
}

input TemplateLystUpdateInput {
  name: String
  items: ItemUpdateManyInput
  users: UserUpdateManyWithoutTemplateLystsInput
  teams: TeamUpdateManyWithoutTemplateLystsInput
}

input TemplateLystUpdateManyWithoutTeamsInput {
  create: [TemplateLystCreateWithoutTeamsInput!]
  delete: [TemplateLystWhereUniqueInput!]
  connect: [TemplateLystWhereUniqueInput!]
  disconnect: [TemplateLystWhereUniqueInput!]
  update: [TemplateLystUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [TemplateLystUpsertWithWhereUniqueWithoutTeamsInput!]
}

input TemplateLystUpdateManyWithoutUsersInput {
  create: [TemplateLystCreateWithoutUsersInput!]
  delete: [TemplateLystWhereUniqueInput!]
  connect: [TemplateLystWhereUniqueInput!]
  disconnect: [TemplateLystWhereUniqueInput!]
  update: [TemplateLystUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [TemplateLystUpsertWithWhereUniqueWithoutUsersInput!]
}

input TemplateLystUpdateWithoutTeamsDataInput {
  name: String
  items: ItemUpdateManyInput
  users: UserUpdateManyWithoutTemplateLystsInput
}

input TemplateLystUpdateWithoutUsersDataInput {
  name: String
  items: ItemUpdateManyInput
  teams: TeamUpdateManyWithoutTemplateLystsInput
}

input TemplateLystUpdateWithWhereUniqueWithoutTeamsInput {
  where: TemplateLystWhereUniqueInput!
  data: TemplateLystUpdateWithoutTeamsDataInput!
}

input TemplateLystUpdateWithWhereUniqueWithoutUsersInput {
  where: TemplateLystWhereUniqueInput!
  data: TemplateLystUpdateWithoutUsersDataInput!
}

input TemplateLystUpsertWithWhereUniqueWithoutTeamsInput {
  where: TemplateLystWhereUniqueInput!
  update: TemplateLystUpdateWithoutTeamsDataInput!
  create: TemplateLystCreateWithoutTeamsInput!
}

input TemplateLystUpsertWithWhereUniqueWithoutUsersInput {
  where: TemplateLystWhereUniqueInput!
  update: TemplateLystUpdateWithoutUsersDataInput!
  create: TemplateLystCreateWithoutUsersInput!
}

input TemplateLystWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  AND: [TemplateLystWhereInput!]
  OR: [TemplateLystWhereInput!]
  NOT: [TemplateLystWhereInput!]
}

input TemplateLystWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  avatar: String
  checkLysts(where: CheckLystWhereInput, orderBy: CheckLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CheckLyst!]
  templateLysts(where: TemplateLystWhereInput, orderBy: TemplateLystOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TemplateLyst!]
  itemsCompleted: Int!
  pro: Boolean!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  avatar: String
  checkLysts: CheckLystCreateManyWithoutUsersInput
  templateLysts: TemplateLystCreateManyWithoutUsersInput
  itemsCompleted: Int
  pro: Boolean
  teams: TeamCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutCheckLystsInput {
  create: [UserCreateWithoutCheckLystsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTemplateLystsInput {
  create: [UserCreateWithoutTemplateLystsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCheckLystsInput {
  name: String!
  email: String!
  avatar: String
  templateLysts: TemplateLystCreateManyWithoutUsersInput
  itemsCompleted: Int
  pro: Boolean
  teams: TeamCreateManyInput
}

input UserCreateWithoutTemplateLystsInput {
  name: String!
  email: String!
  avatar: String
  checkLysts: CheckLystCreateManyWithoutUsersInput
  itemsCompleted: Int
  pro: Boolean
  teams: TeamCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  avatar_ASC
  avatar_DESC
  itemsCompleted_ASC
  itemsCompleted_DESC
  pro_ASC
  pro_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  avatar: String
  itemsCompleted: Int!
  pro: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  avatar: String
  checkLysts: CheckLystUpdateManyWithoutUsersInput
  templateLysts: TemplateLystUpdateManyWithoutUsersInput
  itemsCompleted: Int
  pro: Boolean
  teams: TeamUpdateManyInput
}

input UserUpdateInput {
  name: String
  email: String
  avatar: String
  checkLysts: CheckLystUpdateManyWithoutUsersInput
  templateLysts: TemplateLystUpdateManyWithoutUsersInput
  itemsCompleted: Int
  pro: Boolean
  teams: TeamUpdateManyInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateManyWithoutCheckLystsInput {
  create: [UserCreateWithoutCheckLystsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCheckLystsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCheckLystsInput!]
}

input UserUpdateManyWithoutTemplateLystsInput {
  create: [UserCreateWithoutTemplateLystsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTemplateLystsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTemplateLystsInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCheckLystsDataInput {
  name: String
  email: String
  avatar: String
  templateLysts: TemplateLystUpdateManyWithoutUsersInput
  itemsCompleted: Int
  pro: Boolean
  teams: TeamUpdateManyInput
}

input UserUpdateWithoutTemplateLystsDataInput {
  name: String
  email: String
  avatar: String
  checkLysts: CheckLystUpdateManyWithoutUsersInput
  itemsCompleted: Int
  pro: Boolean
  teams: TeamUpdateManyInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutCheckLystsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCheckLystsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTemplateLystsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTemplateLystsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutCheckLystsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCheckLystsDataInput!
  create: UserCreateWithoutCheckLystsInput!
}

input UserUpsertWithWhereUniqueWithoutTemplateLystsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTemplateLystsDataInput!
  create: UserCreateWithoutTemplateLystsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  checkLysts_every: CheckLystWhereInput
  checkLysts_some: CheckLystWhereInput
  checkLysts_none: CheckLystWhereInput
  templateLysts_every: TemplateLystWhereInput
  templateLysts_some: TemplateLystWhereInput
  templateLysts_none: TemplateLystWhereInput
  itemsCompleted: Int
  itemsCompleted_not: Int
  itemsCompleted_in: [Int!]
  itemsCompleted_not_in: [Int!]
  itemsCompleted_lt: Int
  itemsCompleted_lte: Int
  itemsCompleted_gt: Int
  itemsCompleted_gte: Int
  pro: Boolean
  pro_not: Boolean
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    