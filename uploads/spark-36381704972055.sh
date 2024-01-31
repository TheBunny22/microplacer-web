#!/bin/bash

# Function to interact with GPT-3
function interact_with_gpt() {
    prompt="$1"
    extra_prompt="$2"
    token="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"

    # Combine prompt with extra CLI input
    prompt="$prompt $extra_prompt"

    echo "Prompt being sent to API:"
    echo "$prompt"

    # Make API call to GPT-3
    response=$(curl -s -X POST https://api.openai.com/v1/engines/davinci/completions \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $token" \
        -d "{
            \"prompt\": \"$prompt\",
            \"max_tokens\": 150
        }")

    echo "Response received from API:"
    echo "$response"

    # Extract the generated text from the API response
    generated_text=$(echo "$response" | jq -r '.choices[0].text')

    echo "Generated text:"
    echo "$generated_text"
}

# Check if a file name is provided as an argument
if [ "$#" -eq 1 ]; then
    prompt=$(cat "$1")
else
    # Prompt for CLI input
    read -p "Enter your prompt: " prompt
fi

read -p "Enter extra CLI prompt: " extra_prompt

# Call the function
interact_with_gpt "$prompt" "$extra_prompt"
