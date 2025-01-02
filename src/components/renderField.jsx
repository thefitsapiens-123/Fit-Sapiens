const renderField = (field, setFormData, formData) => {
  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const inputBaseClass = "w-full p-3 border border-gray-300 rounded-lg";

  switch (field.type) {
    case "text":
    case "email":
    case "number":
      return (
        <input
          type={field.type}
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
          onChange={(e) => handleChange(field.name, e.target.value)}
          className={inputBaseClass}
        />
      );
    case "select":
      return (
        <select
          name={field.name}
          required={field.required}
          onChange={(e) => handleChange(field.name, e.target.value)}
          className={inputBaseClass}
        >
          <option value="">Select {field.label}</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    case "checkbox":
      return (
        <div className="gap-3 inline-flex items-center flex-wrap">
          {field.options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <input
                type="checkbox"
                value={option}
                checked={formData[field.name]?.includes(option) || false}
                className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-400 transition-all"
                onChange={(e) => {
                  const currentValues = formData[field.name] || [];
                  const newValues = e.target.checked
                    ? [...currentValues, option]
                    : currentValues.filter((v) => v !== option);
                  handleChange(field.name, newValues);
                }}
              />
              <span className="select-none">{option}</span>
            </label>
          ))}
        </div>
      );
    case "radio":
      return (
        <div className="gap-3 inline-flex items-center flex-wrap">
          {field.options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <input
                type="radio"
                name={field.name}
                value={option}
                required={field.required}
                className="w-4 h-4 text-primary-500 border-gray-300 focus:ring-primary-400"
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
              <span className="select-none">{option}</span>
            </label>
          ))}
        </div>
      );
    case "textarea":
      return (
        <textarea
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
          onChange={(e) => handleChange(field.name, e.target.value)}
          className={`${inputBaseClass} h-32 resize-none`}
        />
      );
    default:
      return null;
  }
};

export default renderField;
