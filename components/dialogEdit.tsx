"use client";
import React, { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  Nama: z.string().min(2).max(50),
  Umur: z.string(),
  Kelamin: z.boolean(),
  Provinsi: z.string(),
  Rombongan: z.string(),
});

export function DialogEdit({ props }: any) {
  const [onEdit, setOnEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nama: props.row.Nama,
      Umur: props.row.Age,
      Kelamin: props.row.Ismale,
      Provinsi: props.row.Province,
      Rombongan: props.row.Group,
    },
  });

  const onSubmitEdit = async (value: z.infer<typeof formSchema>) => {
    setOpen(false);
    const plchUmur: number = +value.Umur;
    await axios.post("/api/updatejamaah", {
      Id: props.row.Id,
      Nama: value.Nama,
      Ismale: value.Kelamin,
      Age: plchUmur,
      Province: value.Provinsi,
      Group: value.Rombongan,
    });

    toast({
      title: "Data berhasil diperbarui",
      description: (
        <div>
          <h1>Nama : {value.Nama}</h1>
          <h1>Asal : {value.Provinsi}</h1>
        </div>
      ),
    });
  };
  const onSubmitDelete = async () => {
    setOpen(false);
    await axios.post("/api/deletejamaah", {
      Id: props.row.Id,
    });

    toast({
      variant: "destructive",
      title: "Data berhasil dihapus",
      description: (
        <div>
          <h1>Nama : {props.row.Nama}</h1>
          <h1>Asal : {props.row.Province}</h1>
        </div>
      ),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Pencil />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Edit Jamaah <span>{props.row.Id}</span>
          </DialogTitle>

          <DialogDescription>Sesuiakan Data Jemaah</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4 w20 ">
          <Form {...form}>
            <form
              onSubmit={
                onEdit
                  ? form.handleSubmit(onSubmitEdit)
                  : form.handleSubmit(onSubmitDelete)
              }
              className=""
            >
              <FormField
                control={form.control}
                name="Nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex">
                <FormField
                  control={form.control}
                  name="Umur"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Umur</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="2" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Kelamin"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-center rounded-lg border p-4">
                      <h3 className="">Wanita</h3>
                      <FormControl className="">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <h3 className="">Pria</h3>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="Provinsi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provinsi</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Rombongan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex">
                <Button
                  onClick={onSubmitDelete}
                  className="rounded-xl bg-red-400/80 font-bold mt-4"
                >
                  delete
                </Button>
                <Button
                  type="submit"
                  className="rounded-xl bg-lime-400/80 font-bold mt-4"
                >
                  Edit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
