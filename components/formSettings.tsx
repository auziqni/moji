"use client";
import React from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  teleid: z.string().min(2).max(50),
});

type prop = {
  userid: string;
  teleid: string;
};

export function FormSettings({ prop }: { prop: prop }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teleid: prop.teleid, //todo
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    await axios.post("/api/settingIdTele", {
      UserId: prop.userid,
      Teleid: value.teleid,
    });

    toast({
      title: "Data Berhasil DIperbarui",
      description: (
        <div>
          <h1>TeleId : {value.teleid}</h1>
        </div>
      ),
    });
  };

  return (
    <div className="sm:mx-7 md:mx-10 lg:mx-56 mt-10 ">
      <h1 className="text-lg font-bold mb-5">Settings</h1>
      <div className="border border-solid border-black rounded-2xl px-8 py">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="teleid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Telegram Chat Id</FormLabel>
                  <FormControl>
                    <Input placeholder="870..." className="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                className="rounded-xl bg-lime-400/80 font-bold mt-10 w-20"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
