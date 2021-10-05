import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { Expose } from 'class-transformer'
import { v4 as uuid} from 'uuid'

@Entity("tags")
export class Tag {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({name: "name_custom"})
    nameCuston(): string {
        return `#${this.name}`
    }

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}
