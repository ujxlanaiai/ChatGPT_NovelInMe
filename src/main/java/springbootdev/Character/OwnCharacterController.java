package springbootdev.Character;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/character")
public class OwnCharacterController {

    private final ChatService chatService;
    private final ChatgptService chatgptService;

    public OwnCharacterController(ChatService chatService, ChatgptService chatgptService) {
        this.chatService = chatService;
        this.chatgptService = chatgptService;
    }

    @GetMapping("")
    public String showForm() {
        return "characterFormPage";
    }

    @PostMapping("/result1")
    public String inputCharGPT(@RequestParam("name") String name, @RequestParam("sex") String sex, @RequestParam("age") int age,
                               @RequestParam("nation") String nation, @RequestParam("appearance") String appearance,
                               @RequestParam("features") String features, Model model) {
        String inputChar = "Create the beginning part of a story that has the following character, less than 5 sentences. Name: "
                + name + ", Sex: "  + sex + ", Age: " + age + ", Nation" + nation +
                ", Appearance: " + appearance + ", Features: " + features;

        String result1 = chatService.getChatResponse(inputChar);
        model.addAttribute("result1", result1);

        return "resultPage";
    }
}

