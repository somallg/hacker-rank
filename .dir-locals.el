((typescript-mode .
   ((eval . (progn
              (projectile-register-project-type 'yarn '("package.json")
                :compile (format "yarn compile %s" (file-name-base buffer-file-name))
                :test (format "yarn test:f %s" (file-name-base buffer-file-name))
                :run (format "yarn debug %s" (file-name-base buffer-file-name))
                :test-suffix ".spec"))))))
