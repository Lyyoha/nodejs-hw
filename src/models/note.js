import { model, Schema } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    titlehttps://github.com/Lyyoha/nodejs-hw/pull/4/conflict?name=src%252Froutes%252FnotesRoutes.js&base_oid=361a79251cb7736d9524fc14b00462e51cc2e241&head_oid=6118f2a9f14da1a7269a79b2640a3699b0e6d7e1: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      default: 'Todo',
      enum: TAGS,
    },
  },
  { versionKey: false, timestamps: true },
);

noteSchema.index({ tag: 1 });

const Note = model('note', noteSchema);
export default Note;
