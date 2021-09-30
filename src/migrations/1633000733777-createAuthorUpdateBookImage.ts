import {MigrationInterface, QueryRunner} from "typeorm";

export class createAuthorUpdateBookImage1633000733777 implements MigrationInterface {
    name = 'createAuthorUpdateBookImage1633000733777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."book" RENAME COLUMN "imageLink" TO "imageurl"`);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`ALTER TABLE "public"."book" RENAME COLUMN "imageurl" TO "imageLink"`);
    }

}
