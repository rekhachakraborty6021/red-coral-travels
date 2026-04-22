export default function Loading() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
                <p className="text-gray-500 font-medium">Loading amazing experiences...</p>
            </div>
        </div>
    );
}
