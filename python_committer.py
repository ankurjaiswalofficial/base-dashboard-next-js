import os
import subprocess
import random
from datetime import datetime, timedelta

# Get a list of modified/untracked files
files = subprocess.check_output(["git", "ls-files", "--modified", "--others", "--exclude-standard"]).decode().splitlines()

if not files:
    print("No modified or untracked files found.")
    exit()

# Set the starting commit date in the past (360 days ago)
start_date = datetime.now() - timedelta(days=360)

index = 0  # File index

while index < len(files):
    commit_date = start_date + timedelta(days=index)
    num_commits = random.choice([1, 3, 4, 5])  # Some days have multiple commits

    for _ in range(num_commits):
        if index >= len(files):
            break  # Stop if all files are committed

        formatted_date = commit_date.strftime("%Y-%m-%d %H:%M:%S")
        env = os.environ.copy()
        env["GIT_COMMITTER_DATE"] = formatted_date

        # Add file to staging
        if files[index] == "python-committer.py":
            index += 1
            continue
        subprocess.run(["git", "add", files[index]])

        # Commit the file with the past date
        commit_message = f"Committing {files[index]} on {formatted_date}"
        subprocess.run(["git", "commit", "-m", commit_message, "--date", formatted_date], env=env)

        print(f"Committed {files[index]} with date {formatted_date}")
        index += 1  # Move to the next file

print("All files committed with past timestamps.")
