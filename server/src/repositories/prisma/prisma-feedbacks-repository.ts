import { prisma } from "../../prisma";
import { FeedbacksRepository, IFeedback } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ comment, type, screenshot }: IFeedback){
        const created_feedback = await prisma.feedback.create({
            data: {
                comment,
                type,
                screenshot,
            }
        })
    }
}