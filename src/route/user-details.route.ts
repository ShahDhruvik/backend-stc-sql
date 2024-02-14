import express from 'express';
import {
    createUserDetailsCt,
    editUserDetailsCt,
    inActiveUserDetailsCt,
    deleteUserDetailsCt,
    getOneUserDetailsCt,
    getAllUserDetailsCt
} from '../controller/user-details.controller';
import schemaValidator from '../middleware/schemaValidator.middleware';
import { UserDetailsSchema } from '../model/user-details.model';
import { USER_DETAILS_RT } from '../utils/route.enums';
const UserDetailsDetailsRt = express.Router();

UserDetailsDetailsRt.post(
    USER_DETAILS_RT.create,
    schemaValidator(UserDetailsSchema),
    createUserDetailsCt,
);
UserDetailsDetailsRt.put(
    USER_DETAILS_RT.edit,
    editUserDetailsCt,
);
UserDetailsDetailsRt.put(
    USER_DETAILS_RT.inActive,
    inActiveUserDetailsCt,
);
UserDetailsDetailsRt.put(
    USER_DETAILS_RT.delete,
    deleteUserDetailsCt,
);
UserDetailsDetailsRt.put(
    USER_DETAILS_RT.delete,
    deleteUserDetailsCt,
);
UserDetailsDetailsRt.get(
    USER_DETAILS_RT.getOne,
    getOneUserDetailsCt,
);
UserDetailsDetailsRt.get(
    USER_DETAILS_RT.listAll,
    getAllUserDetailsCt,
);


export default UserDetailsDetailsRt;

/**
 * @openapi
 * /api/main/UserDetails/create:
 *  post:
 *     tags:
 *       - Main/UserDetails
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
 *                 UserDetails:
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
 *        description: A UserDetails object.
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
 * /api/main/UserDetails/edit/{id}:
 *  put:
 *     tags:
 *       - Main/UserDetails
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
 *                 UserDetails:
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
 *        description: A UserDetails object.
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
 * /api/main/UserDetails/inActive/{id}:
 *  put:
 *     tags:
 *       - Main/UserDetails
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
 * /api/main/UserDetails/delete/{id}:
 *  put:
 *     tags:
 *       - Main/UserDetails
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
 *        description: UserDetails.
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
 * /api/main/UserDetails:
 *  post:
 *     tags:
 *       - Main/UserDetails
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
 *        description: UserDetails.
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
