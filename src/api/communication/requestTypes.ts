import { OfferScore } from 'models/types';

export type GetMenuMessagesHookParameters = {
  slug: string;
  customer_slug: string;
};

export interface GetMenuMessagesRequestParameters extends GetMenuMessagesHookParameters {
  locale: string;
  sid: string;
}

export interface PostSendMessageRequestHookBody {
  offer_slug: string;
  customer_slug: string;
  name: string;
  message: string;
  files?: string[];
}

export interface PostSendMessageRequestBody extends PostSendMessageRequestHookBody {
  locale?: string;
  sid?: string;
}

export interface PostOfferEvaluationRequestHookBody {
  offer_slug: string;
  customer_slug: string;
  offer_score: {
    score: OfferScore;
    message: string;
  };
}

export interface PostOfferEvaluationRequestBody extends PostOfferEvaluationRequestHookBody {
  locale?: string;
  sid?: string;
}
export interface PostContactFormMessageRequestHookBody {
  photo?: {
    name: string;
    contents: string;
  };
  full_name?: string;
  email?: string;
  phone_prefix?: number;
  phone?: string;
  message?: string;
}

export interface PostContactFormMessageRequestBody extends PostContactFormMessageRequestHookBody {
  locale?: string;
  sid?: string;
}

export type CommunicationDownloadAttachmentParameters = {
  locale: string;
  sid: string;
  messageID: number;
};

export type CommunicationDownloadAttachmentRequestHookArg = {
  messageID: number;
};
