import { Avatar } from "@mui/material";
import RatingComponent from "./Rating";

export type CommentCardProps = {
    comment: Comment;
};
export type Comment = {
    avatarUrl: string;
    fullName: string;
    rating: number;
    message: string;
    date: string;
};

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
    return (
        <div className="row me-0  px-0 p-3 border-bottom">
            <div className="d-flex gap-3 align-items-start">
                <div className="d-flex flex-column align-items-center" style={{ width: '100px' }}>
                    <Avatar
                        alt={comment.fullName}
                        src={comment.avatarUrl}
                        sx={{ width: 70, height: 70 }}
                    />
                    <span className="mt-2 fw-bold text-center" style={{ fontSize: 'smaller' }}>
                        {comment.fullName}
                    </span>
                </div>
                <div className="flex-grow-1">
                    <div className="mt-1 mb-0">
                        <RatingComponent isRead={true} fontSize="1.0rem" />
                    </div>
                    <p className="mb-0 text-body">{comment.message}</p>
                    <div className="d-flex gap-2 align-items-center">
                        <small className="text-muted" style={{ fontSize: 'smaller' }}>{comment.date}</small>
                        <button className="btn btn-link btn-sm" style={{ color: '#407e78' }} >Cevapla</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CommentCard;