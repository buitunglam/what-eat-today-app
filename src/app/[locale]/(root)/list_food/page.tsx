import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


import { getFoods } from "@/lib/action/food";


const page = async () => {
  const listFoods = await getFoods();
  console.log("listFoods ---", listFoods)
  return (
    <div className="bg-white mt-5 rounded-xl overflow-hidden">
      <Stack spacing={3} className="w-[70%] max-md:w-[100%] m-auto">
        <Stack spacing={1}>
          <Typography variant="h4">List Foods</Typography>
          <Typography color="text.secondary" variant="body2">
            {`(Remember to add the recipe so everyone can cook your dish! ^^)`}
            {/* Nhớ thêm công thức vào để ai cũng có thể nấu món của bạn nhé */}
          </Typography>
        </Stack>
        
      </Stack>
    </div>
  );
};

export default page;
