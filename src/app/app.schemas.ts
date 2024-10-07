import {z} from "zod";

export const choiceTypes = ['password', 'enum', 'string', 'file', 'date'] as const;
export const choice = z.object({
    name: z.string().optional(),
    prompt: z.string().optional(),
    type: z.enum(choiceTypes),
    options: z.array(z.string()).readonly().optional(),
    default: z.string().optional(),
});
export type Choice = z.infer<typeof choice>;

const choiceSet =  z.array(choice);


const activity = z.object({
    language: z.enum(["javascript", "typescript", "python"]),
    choiceSets: z.record(z.string(), choiceSet)
});

export const schedule = z.array(z.object({
    activity: activity,
    choiceSetName: z.string(),
}))

type Activity = z.infer<typeof activity>;