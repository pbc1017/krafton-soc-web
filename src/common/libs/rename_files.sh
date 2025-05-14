#!/bin/zsh

if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

target_dir="$1"

if [ ! -d "$target_dir" ]; then
    echo "Error: Directory '$target_dir' does not exist"
    exit 1
fi

cd "$target_dir" || exit 1

# Mo로 끝나는 파일을 mobile로 변경
for file in *Mo.*; do
    mv "$file" "${file%Mo.*}mobile.${file##*.}"
done

# PC로 끝나는 파일을 desktop으로 변경
for file in *PC.*; do
    mv "$file" "${file%PC.*}desktop.${file##*.}"
done

# TB로 끝나는 파일을 tablet으로 변경
for file in *TB.*; do
    mv "$file" "${file%TB.*}tablet.${file##*.}"
done

echo "Renaming completed in $target_dir"

# ./rename_files.sh ../../../public/images/DesignStory/Gallery/