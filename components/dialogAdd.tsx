"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Umur: z.number(),
  Kelamin: z.boolean(),
  Provinsi: z.string(),
  Rombongan: z.string(),
});

export function DialogAdd() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nama: "",
      Umur: 25,
      Kelamin: true,
      Provinsi: "",
      Rombongan: "",
    },
  });
  const qwe = () => {
    console.log("sdfsdfsdf");
  };

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log("sdf");
    toast({
      title: "Data berhasil ditambahkan",
      description: (
        <div>
          <h1>Nama : {value.Nama}</h1>
          <h1>Asal : {value.Provinsi}</h1>
        </div>
      ),
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl">
          Tambah Jamaah
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Jamaah</DialogTitle>

          <DialogDescription>
            Tambahkan alat monitoring untuk jamaah
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4 w20 ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
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
                        <Input placeholder="shadcn" {...field} />
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
                      <h3 className="">Pria </h3>
                      <FormControl className="">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <h3 className="">Wanita</h3>
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
              <Button
                type="submit"
                className="rounded-xl bg-lime-400/80 font-bold"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
