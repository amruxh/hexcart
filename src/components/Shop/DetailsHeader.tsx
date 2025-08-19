"use client";
import { useState } from "react";
import CategoryModal from "./CategoryModal";

type PageProps = {
    active: string | string[] | undefined;
}

const DetailsHeader = ({
    active
}: PageProps) => {
    const [popup, setPopup] = useState(false);

    const activeFilter = Array.isArray(active) ? active[0] : active;

    return (
        <>
            <div className="flex flex-row justify-between items-center gap-4 p-4 bg-[var(--background)] border-b border-[var(--border)]">
                <span className="text-sm md:text-base font-medium">
                    Showing results for{" "}
                    <span className="text-[var(--active)] italic">&quot;{activeFilter}&quot;</span>
                </span>
                <button
                    onClick={() => setPopup(!popup)}
                    className="bg-[var(--background-alt)] cursor-pointer border border-[var(--border)] px-5 py-2 rounded-xl text-sm font-medium text-[var(--foreground-muted)] hover:bg-[var(--hover)] hover:text-[var(--background)] transition-all duration-300"
                >
                    Show Categories
                </button>

            </div>
            {popup && (
                <CategoryModal setPopup={setPopup}/>
            )}

        </>
    );
};

export default DetailsHeader;
