import FileUpload from './components/FileUpload';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-8">Welcome to GhostLink</h1>
      <div className="w-full flex justify-center">
        <FileUpload />
      </div>
    </div>
  );
}