// Custom Card Components
const Card = ({ children, className = "" }) => {
    return (
        <div className={`bg-gray-800 rounded-xl shadow-md ${className}`}>
            {children}
        </div>
    );
};

const CardHeader = ({ children, className = "" }) => {
    return (
        <div className={`p-6 ${className}`}>
            {children}
        </div>
    );
};

const CardTitle = ({ children, className = "" }) => {
    return (
        <h3 className={`text-xl font-semibold ${className}`}>
            {children}
        </h3>
    );
};

const CardDescription = ({ children, className = "" }) => {
    return (
        <p className={`text-gray-500 mt-2 ${className}`}>
            {children}
        </p>
    );
};

const CardContent = ({ children, className = "" }) => {
    return (
        <div className={`p-6 pt-0 ${className}`}>
            {children}
        </div>
    );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };