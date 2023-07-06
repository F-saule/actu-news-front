import { Comment } from "../models";

export interface ApiCommentResponse {
  "hydra:totalItems": number;
  "hydra:member": Comment[];
}
