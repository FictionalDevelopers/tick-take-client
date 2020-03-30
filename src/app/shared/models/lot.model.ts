export interface Lot {
  id?: number;
  name: string;
  description: string;
}
export interface CreatedLot {
  status: string;
  _id: string;
  name: string;
  description: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
