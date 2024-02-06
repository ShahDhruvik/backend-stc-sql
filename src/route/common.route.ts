/**
 * @description Independent routes (like user) which are not associated with any particular module but whole application.
 */

import express from 'express';
import upload from '../middleware/multer.middleware';
import { fileUploadService } from '../services/common.services';

const commonRoute = express.Router();

commonRoute.post('/upload', upload.single('file'), async (req, res, next) => {
  const re = await fileUploadService(req, res, next);
  res.json(re);
});

/**
 * @openapi
 * /api/common/upload:
 *  post:
 *     description: Upload a file
 *     tags:
 *       - Common/A
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  file:
 *                    type: string
 *                    example: Append file in formData
 *     responses:
 *       200:
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       400:
 *        description: File upload failed.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/common/editor-upload:
 *  post:
 *     description: Upload a file to editor bucket
 *     tags:
 *       - Common/A
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *            schema:
 *               type: object
 *               properties:
 *                  file:
 *                    type: string
 *                    example: Append file in formData
 *     responses:
 *       200:
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       400:
 *        description: File upload failed.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 */

/**
 * @openapi
 * /api/common/currency/dropdown:
 *  post:
 *     tags:
 *       - Common
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     description: List !
 *     responses:
 *       200:
 *        description: List.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/common/language/dropdown:
 *  post:
 *     tags:
 *       - Common
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     description: List !
 *     responses:
 *       200:
 *        description: List.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 */

export default commonRoute;
