import { Post } from "@/types";
import { Eye, MessageCircle } from "lucide-react";

export const  ViewAndComments = (
    {
        data,
        iconCommentSize,
        iconViewSize
    }
        :
        {
            data: Post;
            iconCommentSize: number;
            iconViewSize: number
        }
) => (
    <div className="flex gap-2">
        <div className="flex items-center gap-1">
            <MessageCircle
                size={iconCommentSize}
                className="text-slate-500" />
            <p
                className="text-slate-500">
                {data.nbComments}
            </p>
        </div>
        <div className="flex items-center gap-1">
            <Eye
                size={iconViewSize}
                className="text-slate-500" />
            <p
                className="text-slate-500">
                {data.nbViews}
            </p>
        </div>
    </div>
)
