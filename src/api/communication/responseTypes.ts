import { GenericMessage, MessageObject } from 'models/types';

export type GetMenuMessagesResponse = {
  status: GenericMessage;
  messages: MessageObject[];
};

export type PostSendMessageResponse = {
  status: GenericMessage;
  messages: MessageObject[];
};

export type CommunicationDownloadAttachementResponse = {
  message: GenericMessage;
  mimetype: string;
  data: string;
};

export interface PostOfferEvaluationResponse {
  status: GenericMessage;
  messages: MessageObject[];
}

export interface PostContactFormMessageResponse {
  status: string;
  text: string;
  text_dev: string;
}
