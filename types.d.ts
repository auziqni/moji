type Data = {
  name: string;
  age: number;
  // image:string,
  lat: number;
  lng: number;
  date: Date;
} | null;

type MyLocation = {
  lat: number;
  lng: number;
} | null;

type Jamaah = {
  id: number;
  name: string;
  gendermale: boolean;
  age: number;
  negara: string;
  rombongan: string;
  lat: number;
  lng: number;
  temp: number;
  humid: number;
};

type JamaahServ = {
  Id: number;
  Nama: string;
  Ismale: boolean;
  Age: number;
  Province: string;
  Group: string;
  Lat: number;
  Lng: number;
  Temp: number;
  Humid: number;
};

type CardMonitorJamaah = {
  id: number;
  tittle: string;
  jumlah: any;
};
