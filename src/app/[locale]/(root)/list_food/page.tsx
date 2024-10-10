"use client";

import ListFood from "@/components/client/ListFood";
import LotteryDom from "@/components/client/LotteryDom";
import * as React from "react";
import RouterLink from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { Plus as PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";
import { Box } from "@mui/system";

import { paths } from "@/paths";
import { authClient } from "@/lib/auth/client";
import { useUser } from "@/hooks/use-user";

import { v4 as uuidv4 } from "uuid";

const schema = zod.object({
  name: zod.string().min(1, { message: "First name is required" }),
  recipes: zod.string().min(1, { message: "Last name is required" }),
  image: zod.string().min(1, { message: "Email is required" }).email(),
});

type Values = zod.infer<typeof schema>;

const defaultValues = { name: "", recipes: "", image: "" } satisfies Values;

const page = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [files, setFiles] = React.useState<any>(null);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  // function

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      // After refresh, GuestGuard will handle the redirect
      router.refresh();
    },
    [router, setError]
  );

  const handleChange = (event: any) => {
    event.preventDefault();

    const listFiles = Object.values(event.target.files);
    const listHaveId = listFiles.map((file: any) => {
      return { contentFile: file, id: uuidv4() };
    });
    setFiles(listHaveId);
  };

  const handleRemoveFile = (file: any) => {
    const listFileOld = [...files];
    const newList = listFileOld.filter((item) => item.id != file.id);

    if (newList.length == 0) {
      setFiles(null);
      return;
    }
    setFiles(newList);
  };

  return (
    <div className="bg-white mt-5 rounded-xl overflow-hidden">
      <Stack spacing={3} className="w-[70%] max-md:w-[100%] m-auto">
        <Stack spacing={1}>
          <Typography variant="h4">Create your own food</Typography>
          <Typography color="text.secondary" variant="body2">
            {`(Remember to add the recipe so everyone can cook your dish! ^^)`}
            {/* Nhớ thêm công thức vào để ai cũng có thể nấu món của bạn nhé */}
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <FormControl error={Boolean(errors.name)}>
                  <InputLabel>Name Food</InputLabel>
                  <OutlinedInput {...field} label="Name Food" />
                  {errors.name ? (
                    <FormHelperText>{errors.name.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="recipes"
              render={({ field }) => (
                <FormControl error={Boolean(errors.recipes)}>
                  <InputLabel>Recipes</InputLabel>
                  <OutlinedInput
                    {...field}
                    label="Recipes"
                    multiline
                    rows={14}
                  />
                  {errors.recipes ? (
                    <FormHelperText>{errors.recipes.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
            />

            <Box className="flex items-center flex-wrap gap-3 mb-[20px] w-full">
              <p className="mb-1.5 mr-[15px] text-zinc-500 font-medium">
                File(*)
              </p>

              <Box className="flex flex-1 flex-wrap items-center gap-4 ">
                {files ? (
                  files.map((file: any, index: number) => (
                    <Box
                      key={index}
                      className={
                        "flex flex-col gap-[5px] w-[31%] items-end justify-center rounded-[10px] p-[5px] drop-shadow-md"
                      }
                    >
                      <Trash
                        className="text-[20px] cursor-pointer"
                        onClick={() => handleRemoveFile(file)}
                      />
                      <img
                        src={`${window.URL.createObjectURL(file.contentFile)}`}
                        className="rounded-[10px]"
                      />
                    </Box>
                  ))
                ) : (
                  <div className="flex items-center cursor-pointer justify-center w-[70px] h-[70px] border border-gray-200 bg-white shadow-md p-2 outline-none rounded-[7px]">
                    <label htmlFor="upload-file">
                      <PlusIcon
                        fontSize="var(--icon-fontSize-md)"
                        className="size-5"
                      />
                    </label>
                    <input
                      type="file"
                      className="absolute cursor-pointer border-none opacity-0 -z-1"
                      multiple
                      name="files[]"
                      id="upload-file"
                      onChange={handleChange}
                    />
                  </div>
                )}
              </Box>
            </Box>

            {errors.root ? (
              <Alert color="error">{errors.root.message}</Alert>
            ) : null}
            <Button disabled={isPending} type="submit" variant="contained">
              Create Food
            </Button>
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default page;
