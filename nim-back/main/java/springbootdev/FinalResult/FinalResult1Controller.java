package springbootdev.FinalResult;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import springbootdev.Character.ChatService;

@Controller
@RequestMapping("/finalResult1")
public class FinalResult1Controller {

    private final ChatService chatService;
    private final ChatgptService chatgptService;

    public FinalResult1Controller(ChatService chatService, ChatgptService chatgptService) {
        this.chatService = chatService;
        this.chatgptService = chatgptService;
    }

    @GetMapping("")
    public String showFinalResult1(@RequestParam("result1") String result1, @RequestParam("option1") String option1, @RequestParam("ending1") String ending1,
                                   Model model){
        String inputFinalResult1 = "Please refine the following story while maintaining the content: " + result1 + option1 + ending1;

        String finalResult1 = chatService.getChatResponse(inputFinalResult1);
        model.addAttribute("finalResult1", finalResult1);

        return "finalResult1Page";
    }
}
