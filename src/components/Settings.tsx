import { SettingsComponentType } from "../types";

export const Settings = (props: SettingsComponentType) => {
  const { settings, handleChange } = props;
  return (
    <>
      <div className="settings-block__item">
        <label htmlFor="placeholder">Placeholder</label>
        <input
          type="text"
          id="placeholder"
          name="placeholder"
          placeholder="Your name"
          value={settings.placeholder}
          onChange={handleChange}
        />
      </div>
      <div className="settings-block__item">
        <label htmlFor="value">Value</label>
        <input
          type="text"
          id="value"
          name="value"
          placeholder="Value"
          value={settings.value}
          onChange={handleChange}
        />
      </div>
      <div className="settings-block__item">
        <label htmlFor="label">Label</label>
        <input
          type="text"
          id="label"
          name="label"
          placeholder="Full name"
          value={settings.label}
          onChange={handleChange}
        />
      </div>
      <div className="settings-block__item">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={settings.description}
          onChange={handleChange}
        />
      </div>
      <div className="settings-block__item">
        <label htmlFor="error">Error</label>
        <input
          type="text"
          id="error"
          name="error"
          value={settings.error}
          onChange={handleChange}
          placeholder="Error"
        />
      </div>
      <div className="settings-block__item">
        <label htmlFor="variant">Variant</label>
        <select
          id="variant"
          name="variant"
          className="select-style"
          onChange={handleChange}
          value={settings.variant}
          // placeholder="Error"
        >
          <option>default</option>
          <option>outline</option>
          <option>underline</option>
          <option>filed</option>
        </select>
      </div>

      <div className="settings-block__item">
        <label htmlFor="radius">Radius</label>
        <input
          type="range"
          id="radius"
          name="radius"
          max={10}
          min={4}
          step={2}
          onChange={handleChange}
          value={settings.radius}
        />
      </div>
      <div className="settings-block__item">
        <label htmlFor="size">Size</label>
        <input
          type="range"
          id="size"
          name="size"
          max={30}
          min={10}
          step={4}
          onChange={handleChange}
          value={settings.size}
        />
      </div>
      <div className="settings-block__item settings-block__item-row">
        <input
          type="checkbox"
          id="withIcon"
          name="withIcon"
          onChange={handleChange}
          checked={settings.withIcon}
        />
        <label htmlFor="withIcon">With Icon</label>
      </div>
      <div className="settings-block__item settings-block__item-row">
        <input
          type="checkbox"
          id="disabled"
          name="disabled"
          onChange={handleChange}
          checked={settings.disabled}
        />
        <label htmlFor="disabled">Disabled</label>
      </div>
      <div className="settings-block__item settings-block__item-row">
        <input
          type="checkbox"
          id="withAsterisk"
          name="withAsterisk"
          onChange={handleChange}
          checked={settings.withAsterisk}
        />
        <label htmlFor="withAsterisk">With asterisk</label>
      </div>
    </>
  );
};
