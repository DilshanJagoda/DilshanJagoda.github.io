const allScreenshots = import.meta.glob(
  "/src/projects/**/*.{png,jpg,jpeg,gif,webp}",
  { eager: true, query: "?url" }
);

const base = "/src/projects/";

export function getProjectScreenshots(projectId, screenshotDirs) {
  const result = {};
  for (const [dir, items] of Object.entries(screenshotDirs)) {
    result[dir] = items.map((item) => {
      const projectDirs = {
        institution: "E_class_Institute_Edition",
        teacher: "E_class_Teachers_Edition",
        os: "JagodaOS",
        recovery: "recovery_tool_mysql",
      };
      const dirName = projectDirs[projectId] || projectId;
      const key = `${base}${dirName}/screenshots/${item.file}`;
      const match = allScreenshots[key];
      return {
        ...item,
        url: match ? match.default : null,
      };
    });
  }
  return result;
}

export function getProjectThumbnail(projectId, screenshotDirs) {
  const projectDirs = {
    institution: "E_class_Institute_Edition",
    teacher: "E_class_Teachers_Edition",
    os: "JagodaOS",
    recovery: "recovery_tool_mysql",
  };
  const dirName = projectDirs[projectId] || projectId;
  for (const items of Object.values(screenshotDirs)) {
    for (const item of items) {
      const key = `${base}${dirName}/screenshots/${item.file}`;
      const match = allScreenshots[key];
      if (match) return { ...item, url: match.default };
    }
  }
  return null;
}

export function getAllScreenshotsFlat(projectId, screenshotDirs) {
  const flat = [];
  const projectDirs = {
    institution: "E_class_Institute_Edition",
    teacher: "E_class_Teachers_Edition",
    os: "JagodaOS",
    recovery: "recovery_tool_mysql",
  };
  const dirName = projectDirs[projectId] || projectId;
  for (const [category, items] of Object.entries(screenshotDirs)) {
    items.forEach((item) => {
      const key = `${base}${dirName}/screenshots/${item.file}`;
      const match = allScreenshots[key];
      flat.push({
        ...item,
        category,
        url: match ? match.default : null,
      });
    });
  }
  return flat;
}

export default allScreenshots;
