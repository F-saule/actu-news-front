import { Post } from "../models";

export interface ApiPostResponse {
  "hydra:totalItems": number;
  "hydra:member": Post[];
  "hydra:view" ?: {
    "hydra:first" : string,
    "hydra:last" : string,
    "hydra:next" : string,
  }
}
