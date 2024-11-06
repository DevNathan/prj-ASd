import { Request, Response, Router } from "express";
import multer from "multer";
import { ERROR_MESSAGES } from "@/const/errorMessage";
import { protos, SpeechClient } from "@google-cloud/speech";
import fs from "fs";
import path from "path";
import os from "os";

const sstRouter = Router();
const client = new SpeechClient();
const documentsDir = path.join(os.homedir(), "문서");

// Multer 설정: 사용자 홈 디렉터리의 '문서' 폴더에 파일 저장
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, documentsDir); // 파일 저장 위치 설정
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `audio-${uniqueSuffix}.wav`); // 파일 이름 설정
  },
});

// Multer 인스턴스 생성
const upload = multer({ storage: storage });

sstRouter.post(
  "/",
  upload.single("audio"),
  async (req: Request, res: Response) => {
    try {
      const filePath = req.file?.path;

      if (!filePath) throw new ReferenceError("Audio file is missing.");

      const audioBytes = fs.readFileSync(filePath).toString("base64");

      const request = {
        audio: { content: audioBytes },
        config: {
          encoding:
            protos.google.cloud.speech.v1.RecognitionConfig.AudioEncoding
              .LINEAR16,
          sampleRateHertz: 16000,
          languageCode: "ko-KR",
        },
      };

      const [response] = await client.recognize(request);
      const transcription = response.results
        ?.map((result) => result.alternatives?.[0].transcript)
        .join("\n");
      res.json({ transcript: transcription });
    } catch (error: any) {
      console.error(error);
      if (error instanceof ReferenceError) {
        res.status(400).send(error.message);
      } else {
        res.status(500).send(ERROR_MESSAGES.SERVER_ERROR);
      }
    }
  },
);

export default sstRouter;
