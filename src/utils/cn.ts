import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
    override: {
        classGroups: {
            "font-size": [
                "text-100",
                "text-200",
                "text-300",
                "text-400",
                "text-500",
                "text-600",
                "text-700",
                "text-800",
                "text-900",
            ],
        },
    },
});

export function cn(...classes: ClassValue[]) {
    return customTwMerge(clsx(classes));
}
