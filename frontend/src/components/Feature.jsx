const Features = () => {
    return (
      <section className="p-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        <h2 className="text-3xl font-bold text-center">Why EduQuest?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">AI-Powered Learning</h3>
            <p>Get personalized content based on your learning style.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Interactive Quizzes</h3>
            <p>Test your knowledge with AI-generated quizzes.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Progress Tracking</h3>
            <p>Track your learning journey with detailed insights.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  