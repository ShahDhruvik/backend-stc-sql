import express from 'express';
import {
    createUserCt,
    editUserCt,
    inActiveUserCt,
    deleteUserCt,
} from '../controller/user.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { UserSchema } from '../model/user.model';
import { USER_RT } from '../utils/route.enums';
const userRt = express.Router();

userRt.post(
    USER_RT.create,
    schemaValidator(UserSchema),
    createUserCt,
);
userRt.put(
    USER_RT.edit,
    editUserCt,
);
userRt.put(
    USER_RT.inActive,
    inActiveUserCt,
);
userRt.put(
    USER_RT.delete,
    deleteUserCt,
);
userRt.put(
    USER_RT.delete,
    deleteUserCt,
);


export default userRt;

/**
 * @openapi
 * /api/main/User/create:
 *  post:
 *     tags:
 *       - Main/User
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 name:
 *                   type: string
 *                 logo:
 *                   type: string
 *                 user:
 *                   type: string
 *                 password:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 mobile:
 *                   type: string
 *                 fax:
 *                   type: string
 *                 website:
 *                   type: string
 *                 contactPerson:
 *                   type: string
 *                 contactPersonEmail:
 *                   type: string
 *                 contactPersonPhone:
 *                   type: string
 *                 contactPersonMobile:
 *                   type: string
 *                 subscriptionId:
 *                   type: string
 *                 subscriptionPrice:
 *                   type: number
 *                 numberOfLicenses:
 *                   type: number
 *                 countryId:
 *                   type: number
 *                 uploads:
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                          ip:
 *                            type: string
 *                          document:
 *                            type: string
 *                          date:
 *                            type: string
 *     responses:
 *       200:
 *        description: A user object.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: Contact number already exists.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/main/User/edit/{id}:
 *  put:
 *     tags:
 *       - Main/User
 *     description: Get back req body!
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 name:
 *                   type: string
 *                 logo:
 *                   type: string
 *                 user:
 *                   type: string
 *                 password:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 mobile:
 *                   type: string
 *                 fax:
 *                   type: string
 *                 website:
 *                   type: string
 *                 contactPerson:
 *                   type: string
 *                 contactPersonEmail:
 *                   type: string
 *                 contactPersonPhone:
 *                   type: string
 *                 contactPersonMobile:
 *                   type: string
 *                 subscriptionId:
 *                   type: string
 *                 subscriptionPrice:
 *                   type: number
 *                 numberOfLicenses:
 *                   type: number
 *                 countryId:
 *                   type: number
 *     responses:
 *       200:
 *        description: A user object.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: Contact number already exists.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/main/User/inActive/{id}:
 *  put:
 *     tags:
 *       - Main/User
 *     parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 isActive:
 *                   type: boolean
 *     responses:
 *       200:
 *        description: AccessToken and refreshToken.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: Otp invalid.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/main/User/delete/{id}:
 *  put:
 *     tags:
 *       - Main/User
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *     responses:
 *       200:
 *        description: User.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: invalid token.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 * /api/main/User:
 *  post:
 *     tags:
 *       - Main/User
 *     security:
 *       - BearerAuth: []
 *         RefreshTokenAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                 search:
 *                   type: string
 *                   default: ""
 *                 sortParam:
 *                   type: string
 *                   default: "name"
 *                 sortOrder:
 *                   type: string
 *                   default: "asc"
 *                 limitPerPage:
 *                   type: number
 *                   default: 10
 *                 currentPage:
 *                   type: number
 *                   default: 1
 *     responses:
 *       200:
 *        description: User.
 *        content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommonResponse'
 *       404:
 *        description: invalid token.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 *       500:
 *        description: Server error.
 *        content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CommonResponse'
 */
