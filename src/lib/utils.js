import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// will use Tailwind merge to allow us to easily combine class names
// without really writing a lot of them in one line
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}