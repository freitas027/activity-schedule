import {schedule} from './src/app/app.schemas'
import {zodToJsonSchema} from "zod-to-json-schema"

console.log(zodToJsonSchema(schedule, "mySchema"))