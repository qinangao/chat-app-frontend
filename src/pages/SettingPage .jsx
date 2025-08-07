import ThemeCollections from "../components/ThemeCollections";
import Preview from "../components/Preview";

function SettingPage() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-10 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 p-2">
          <h2 className="text-2xl font-semibold">Theme</h2>
          <p className="text-lg text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>
        <ThemeCollections />
        <Preview />
      </div>
    </div>
  );
}

export default SettingPage;
