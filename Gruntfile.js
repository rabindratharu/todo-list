module.exports = function (grunt) {
	require("load-grunt-tasks")(grunt);

	const copyFiles = [
		"assets/**",
		"inc/**",
		"src/**",
        "templates/**",
		"languages/**",
		"aquila-features.php",
		"vendor/**",
		"!**/*.map",
	];

	const excludeCopyFilesPro = copyFiles.slice(0).concat(["changelog.txt"]);

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// Clean temp folders and release copies.
		clean: {
			temp: {
				src: ["**/*.tmp", "**/.afpDeleted*", "**/.DS_Store"],
				dot: true,
				filter: "isFile",
			},
			assets: ["assets/build/**"],
			folder_v2: ["build/**"],
		},

		checktextdomain: {
			options: {
				text_domain: "aquila-features",
				keywords: [
					"__:1,2d",
					"_e:1,2d",
					"_x:1,2c,3d",
					"esc_html__:1,2d",
					"esc_html_e:1,2d",
					"esc_html_x:1,2c,3d",
					"esc_attr__:1,2d",
					"esc_attr_e:1,2d",
					"esc_attr_x:1,2c,3d",
					"_ex:1,2c,3d",
					"_n:1,2,4d",
					"_nx:1,2,4c,5d",
					"_n_noop:1,2,3d",
					"_nx_noop:1,2,3c,4d",
				],
			},
			files: {
				src: [
					"inc/*.php",
					"src/*.php",
                    "templates/**/*.php",
				],
				expand: true,
			},
		},

		copy: {
			pro: {
				src: excludeCopyFilesPro,
				dest: "build/<%= pkg.name %>/",
			},
		},

		compress: {
			pro: {
				options: {
					mode: "zip",
					archive: "./build/<%= pkg.name %>-<%= pkg.version %>.zip",
				},
				expand: true,
				cwd: "build/<%= pkg.name %>/",
				src: ["**/*"],
				dest: "<%= pkg.name %>/",
			},
		},
	});

	// Remove the grunt-search related tasks since the package doesn't exist
	grunt.registerTask("finish", function () {
		const json = grunt.file.readJSON("package.json");
		const file = "./build/" + json.name + "-" + json.version + ".zip";
		grunt.log.writeln("Process finished.");
		//log file
		grunt.log.writeln("File: " + file);
		grunt.log.writeln("----------");
	});

	grunt.registerTask("build", ["checktextdomain", "copy:pro", "compress:pro"]);

	grunt.registerTask("preBuildClean", [
		"clean:temp",
		"clean:assets",
		"clean:folder_v2",
	]);
};