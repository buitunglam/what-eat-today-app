import { IncomingForm } from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import type { UploadApiResponse } from "cloudinary";
import { NextResponse } from "next/server";
import { Food } from "@/lib/model/Food.model";
import { connectToDb } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(request: Request) {
  try {
    await connectToDb();
    const formData = await request.formData();
    // get data from formData
    const urls = await uploadImageToClound(formData);
    const name = formData.get("name");
    const userId = formData.get("userId");
    const typeImage = formData.get("typeImage");
    const recipes = formData.get("recipes");
    console.log("result --", urls);
    const dataRequest = {
      name,
      userId,
      typeImage,
      recipes,
      imgs: urls
    };
    console.log("data request ---", dataRequest);
    // save to DB
    const food = await Food.create(dataRequest);
    console.log("food ---", food);
    return Response.json({ data: JSON.stringify(food) });
  } catch (error) {
    console.error("Error uploading file:", error);
    return Response.json({ error: "Error uploading file" }, { status: 500 });
  }
}

const uploadImageToClound = async (formData: FormData) => {
  const uploadsFolder = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOADS_FOLDER;
  const files = formData.getAll("images") as File[];

  if (!files || files.length === 0) {
    return Response.json({ error: "No files uploaded" }, { status: 400 });
  }

  const uploadPromises = files.map(async (file) => {
    const fileBuffer = await file.arrayBuffer();
    return new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "auto", folder: uploadsFolder },
          (error, result) => {
            if (error || !result) reject(error);
            else resolve(result);
          }
        )
        .end(Buffer.from(fileBuffer));
    });
  });

  const results = await Promise.all(uploadPromises);
  const urls = results.map((result) => result.secure_url);
  return urls;
};
