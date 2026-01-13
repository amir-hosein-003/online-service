import { Comment, comments } from "@/lib/lists/commentsList";

const CommentsList = () => {
  return (
    <section className="grid grid-cols-5 gap-6">
      {comments.map((comment: Comment, index: number) => (
        <div
          key={index}
          className=" min-h-32 rounded-lg shadow-[inset_0_0_0_2px_#00000010] p-2"
        >
          <div className="flex flex-row items-center gap-4">
            {/* user icon */}
            <div className="w-8 h-8 rounded-full border-2 border-black flex flex-col items-center justify-center relative">
              <div className="w-2 h-2 border-2 border-black rounded-full" />
              <div className="w-4 h-2 border-2 border-b-0 border-black rounded-full rounded-b-none" />
            </div>
            <div>
              <p>{comment.user}</p>
              <p className="text-base-content/60 text-xs">1404/07/12</p>
            </div>
          </div>
          <p className="text-base-content/60 text-sm mt-2">
            {comment.comment.slice(0, 100) + "..."}
          </p>
        </div>
      ))}
    </section>
  );
};

export default CommentsList;
