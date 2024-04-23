export function formatDateString(dateString: string): string {
    const dateObject = new Date(dateString);
    return dateObject.toDateString(); // Returns the date in the format "Day Month Date Year"
}