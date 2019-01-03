export const BASENODES = [
    { id: "myskills", group: 0, label: "TechStack", level: 1 },
    { id: "backend", group: 0, label: "Backend", level: 1 },
    { id: "golang"   , group: 0, label: "Golang"   , level: 2 },
    { id: "python"   , group: 0, label: "Python"   , level: 2 },
    { id: "java"   , group: 0, label: "Java"  , level: 2 },
    { id: "c"   , group: 0, label: "C"    , level: 2 },
    { id: "frontend", group: 1, label: "Frontend", level: 1 },
    { id: "reactjs"   , group: 1, label: "ReactJS"   , level: 2 },
    { id: "vanillajs"   , group: 1, label: "VanillaJS"   , level: 2 },
    { id: "database"  , group: 2, label: "Database"   , level: 1 },
    { id: "redis"  , group: 2, label: "Redis"   , level: 2 },
    { id: "mysql"  , group: 2, label: "MySQL"  , level: 2 }
  ]
export const BASELINKS = [
    { target: "backend", source: "myskills" , strength: 0.2 },
    { target: "frontend", source: "myskills" , strength: 0.2 },
    { target: "database", source: "myskills" , strength: 0.2 },
    { target: "backend", source: "golang" , strength: 0.5 },
    { target: "backend", source: "python" , strength: 0.5 },
    { target: "backend", source: "java" , strength: 0.5 },
    { target: "backend", source: "c" , strength: 0.5 },
    { target: "frontend", source: "reactjs" , strength: 0.5 },
    { target: "frontend", source: "vanillajs" , strength: 0.5 },
    { target: "database"  , source: "redis", strength: 0.5 },
    { target: "database"  , source: "mysql", strength: 0.5 },

  ]