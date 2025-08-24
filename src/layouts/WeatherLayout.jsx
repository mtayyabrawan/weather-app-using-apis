import Footer from "../components/common/Footer";

function WeatherLayout({ children }) {
  return (
    <div className="w-full bg-cyan-100">
      <main className="min-h-[calc(100vh-2.25rem)]">{children}</main>
      <Footer />
    </div>
  );
}

export default WeatherLayout;
