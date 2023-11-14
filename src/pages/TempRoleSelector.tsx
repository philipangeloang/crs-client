import useRoleStore from "@/store/ThemeStore";

const TempRoleSelector = () => {
  const { setRole } = useRoleStore();

  return (
    <span className="text-main-red">
      <select
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        <option value="administrator">Administrator</option>
        <option value="college">College</option>
        <option value="faculty">Faculty</option>
        <option value="student u">Student U</option>
        <option value="student g">Student G</option>
        <option value="cashier">Cashier</option>
      </select>
    </span>
  );
};

export default TempRoleSelector;
