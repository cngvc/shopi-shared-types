export const ExchangeNames = {
  AUTH_NOTIFICATION_EMAIL: 'send-auth-notification-email',
  USERS_BUYER_UPDATE: 'update-users-buyer',
  USERS_STORE_UPDATE: 'update-users-store',
  GET_STORE_USERS: 'get-store-users',
  CREATE_SEED_PRODUCT: 'create-seeds-product',
  GET_USERS: 'get-users',
  CREATE_SEED_CHAT: 'create-seeds-chat',
} as const satisfies Record<string, string>;

export const RoutingKeys = {
  AUTH_NOTIFICATION_EMAIL: 'send-auth-notification-email-key',
  USERS_BUYER_UPDATE: 'update-users-buyer-key',
  USERS_STORE_UPDATE: 'update-users-store-key',
  GET_STORE_USERS: 'get-store-users-key',
  CREATE_SEED_PRODUCT: 'create-seeds-product-key',
  GET_USERS: 'get-users-key',
  CREATE_SEED_CHAT: 'create-seeds-chat-key',
} as const satisfies Record<string, string>;

export const QueueNames = {
  AUTH_NOTIFICATION_EMAIL: 'auth-notification-email-queue',
  USERS_BUYER_UPDATE: 'update-users-buyer-queue',
  USERS_STORE_UPDATE: 'update-users-store-queue',
  GET_STORE_USERS: 'get-store-users-queue',
  CREATE_SEED_PRODUCT: 'create-seeds-product-queue',
  GET_USERS: 'get-users-queue',
  CREATE_SEED_CHAT: 'create-seeds-chat-queue',
} as const satisfies Record<string, string>;
